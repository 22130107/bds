"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMobileScreen, faLocationDot, faStar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export function IconUser({ className }: { className?: string }) {
  return <FontAwesomeIcon icon={faUser} className={className ?? "text-red-600 w-4 h-4"} />;
}

export function IconPhone({ className }: { className?: string }) {
  return <FontAwesomeIcon icon={faMobileScreen} className={className ?? "text-red-600 w-4 h-4"} />;
}

export function IconLocation({ className }: { className?: string }) {
  return <FontAwesomeIcon icon={faLocationDot} className={className ?? "text-red-500 w-4 h-4"} />;
}

export function IconStar({ className }: { className?: string }) {
  return <FontAwesomeIcon icon={faStar} className={className ?? "text-gray-400 w-4 h-4"} />;
}
