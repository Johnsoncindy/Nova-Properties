import React from 'react';

const Inquiries: React.FC = () => {
    const inquiries = [
        // Sample data
        { id: 1, property: 'Beautiful House', message: 'Is this property still available?', date: '2024-06-27' },
        { id: 2, property: 'Modern Apartment', message: 'Can I schedule a visit?', date: '2024-06-26' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">My Inquiries</h2>
            <ul>
                {inquiries.map((inquiry) => (
                    <li key={inquiry.id} className="border-b py-2">
                        <p className="font-bold">{inquiry.property}</p>
                        <p>{inquiry.message}</p>
                        <p className="text-gray-600 text-sm">{inquiry.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inquiries;
