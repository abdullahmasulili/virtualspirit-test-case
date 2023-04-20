import React from "react";
import styles from "./Avatar.module.css";
import { faker } from "@faker-js/faker";
import { resolveInitials, resolveTextColor } from "../../utils";

export default function Avatar({ name = 'Tomi Budi', image, size = 'md', index = 0 }) {
  const bgColor = faker.color.rgb();
  const avatarSize = (sizeCode) => {
    switch (sizeCode) {
      case "sm":
        return 32;
      case "md":
        return 40;
      case "lg":
        return 48;
      case "xl":
        return 64;
      default:
        return 40;
    }
  };
  
  return (
    <div
      className={`${styles.avatar} ${styles[`avatar--${size}`]}`}
      style={{
        backgroundColor: bgColor,
        color: resolveTextColor(bgColor),
        left: `${index * (avatarSize(size) * 0.75)}px`,
        fontSize: `${avatarSize(size) * 0.3}px`
      }}
      data-testid="avatar"
    >
      {image ? <img src={image} /> : <span>{typeof name === 'string' ? resolveInitials(name) : `+${name}`}</span>}
    </div>
  );
}
