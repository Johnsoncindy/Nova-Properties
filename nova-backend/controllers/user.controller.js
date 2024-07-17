import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get users" });
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Failed to get user with id ${id}` });
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, email, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Unauthorized to update this user" });
    }

    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            }
        });
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Failed to update user with id ${id}` });
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.user.delete({
            where: { id }
        });
        res.status(200).json({ message: `User with id ${id} deleted successfully` });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Failed to delete user with id ${id}` });
    }
}
