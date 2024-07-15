import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../../data/Property";
import { Card, Button } from "flowbite-react";
import {
  FaBed,
  FaBath,
  FaRuler,
  FaMapMarkerAlt,
  FaHome,
  FaHeart,
} from "react-icons/fa";
import ScheduleTourCard from "../card/ScheduleTourCard";
import CommentForm from "../form/CommentForm";
import ImageSlider from "../card/ImageSlide";

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  avatar: string;
  parentId?: number;
}

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const loggedInUser = { name: "John Doe", email: "john.doe@example.com" };
  const userAvatar =
    "https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=110&d=mm&r=g";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) {
    return <div>Property not found</div>;
  }

  const propertyId = parseInt(id);
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  const similarProperties = properties.filter((p) => {
    return (
      p.id !== property.id &&
      (p.type === property.type || p.location === property.location)
    );
  });

  const handleCommentSubmit = (comment: string, parentId?: number) => {
    const newComment: Comment = {
      id: comments.length + 1,
      author: loggedInUser.name,
      text: comment,
      date: new Date().toLocaleString(),
      avatar: userAvatar,
      parentId,
    };
    setComments([...comments, newComment]);
    setReplyTo(null);
  };

  const handleReplyClick = (commentId: number) => {
    setReplyTo(commentId);
  };

  const handleCancelReply = () => {
    setReplyTo(null);
  };

  const handleWishlistToggle = (propertyId: number) => {
    if (wishlist.includes(propertyId)) {
      setWishlist(wishlist.filter((id) => id !== propertyId));
    } else {
      setWishlist([...wishlist, propertyId]);
    }
  };

  const renderComments = (parentId?: number) => {
    return comments
      .filter((comment) => comment.parentId === parentId)
      .map((comment) => (
        <li key={comment.id} className="comment">
          <article className="flex space-x-4">
            <img
              alt={comment.author}
              src={comment.avatar}
              className="avatar w-16 h-16 rounded-full"
            />
            <div className="comment-detail-wrap">
              <div className="comment-meta">
                <h5 className="author">
                  <cite className="fn">{comment.author}</cite>
                </h5>
                <p>
                  <a href="#">
                    <time>{comment.date}</time>
                  </a>
                </p>
              </div>
              <div className="comment-body">
                <p>{comment.text}</p>
                <button
                  onClick={() => handleReplyClick(comment.id)}
                  className="text-blue-600 hover:underline"
                >
                  Reply
                </button>
                <ul className="pl-4">{renderComments(comment.id)}</ul>
              </div>
            </div>
          </article>
        </li>
      ));
  };

  return (
    <div className="container mx-auto p-4">
      <ImageSlider images={property.images} />

      <div className="flex justify-between items-center mt-4">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
          {property.title}
        </h1>

        <Button
          onClick={() => handleWishlistToggle(property.id)}
          className={`flex items-center ${
            wishlist.includes(property.id) ? "text-red-600" : "text-gray-400"
          } bg-white`}
        >
          <FaHeart className="mr-2 h-8 w-8" />
          {wishlist.includes(property.id)
            ? "Remove from Wishlist"
            : "Add to Wishlist"}
        </Button>
      </div>
      <p className="text-gray-700 mt-2">{property.description}</p>
      <p className="text-gray-900 font-bold mt-2">{property.price}</p>

      <div className="mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4">
          {property.bedrooms && (
            <div className="border rounded p-2 bg-[#ffffff]">
              <span className="block text-gray-600">Bedrooms</span>
              <div className="flex items-center ml-2">
                <FaBed className="text-2xl mr-2" />
                <span className="font-bold">{property.bedrooms}</span>
              </div>
            </div>
          )}
          {property.bathrooms && (
            <div className="border rounded p-2 bg-[#ffffff]">
              <span className="block text-gray-600">Bathrooms</span>
              <div className="flex items-center ml-2">
                <FaBath className="text-2xl mr-2" />
                <span className="font-bold">{property.bathrooms}</span>
              </div>
            </div>
          )}
          <div className="border rounded p-2 bg-[#ffffff]">
            <span className="block text-gray-600">Area</span>
            <div className="flex items-center ml-2">
              <FaRuler className="text-2xl mr-2" />
              <span className="font-bold">{property.area} sq ft</span>
            </div>
          </div>
          {property.location && (
            <div className="border rounded p-2 bg-[#ffffff]">
              <span className="block text-gray-600">Location</span>
              <div className="flex items-center ml-2">
                <FaMapMarkerAlt className="text-2xl mr-2" />
                <span className="font-bold">{property.location}</span>
              </div>
            </div>
          )}
          {property.type && (
            <div className="border rounded p-2 bg-[#ffffff]">
              <span className="block text-gray-600">Type</span>
              <div className="flex items-center ml-2">
                <FaHome className="text-2xl mr-2" />
                <span className="font-bold">{property.type}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {property.features && property.features.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mt-4">Features</h2>
          <ul className="list-disc pl-5 mt-2">
            {property.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {property.additionalDetails && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mt-4">Additional Details</h2>
          <ul className="list-disc pl-5 mt-2">
            {property.additionalDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5">
        <ScheduleTourCard />
      </div>

      <div id="comments" className="mt-8">
        <Card>
          <div className="rh_comments__header">
            <h3 id="comments-title">{comments.length} Comment(s)</h3>
          </div>
          <ol className="commentlist">{renderComments()}</ol>
          <div id="respond" className="comment-respond mt-8">
            <h3 id="reply-title" className="comment-reply-title">
              {replyTo ? "Leave a Reply" : "Leave a Comment"}
            </h3>
            <CommentForm
              name={loggedInUser.name}
              email={loggedInUser.email}
              onSubmit={handleCommentSubmit}
              parentId={replyTo ?? undefined}
              onCancelReply={replyTo ? handleCancelReply : undefined}
            />
          </div>
        </Card>
      </div>

      {similarProperties.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {similarProperties.map((property) => (
              <Link key={property.id} to={`/property/${property.id}`}>
                <div className="similar-property border rounded p-4 bg-white h-full">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-bold">{property.title}</h3>
                  <p className="text-gray-600">{property.description}</p>
                  <p className="text-gray-900 font-bold mt-2">
                    {property.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
