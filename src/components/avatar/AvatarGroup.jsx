import React from "react";
import Avatar from "./Avatar";
import styles from "./AvatarGroup.module.css";

export default function AvatarGroup({ avatars, maxLength = 0, size }) {
  const isWithinMaxLength = maxLength > 0 && maxLength < avatars.length;

  return (
    <div className={styles.avatar__group} data-testid="avatar-group">
      {avatars ? (avatars.map((item, index) => {
        const shouldRenderAvatar = !isWithinMaxLength || index < maxLength;

        return shouldRenderAvatar ? (
          <Avatar
            key={index}
            name={item.name}
            image={item.image}
            size={size}
            index={index}
          />
        ) : null;
      })) : (
        <Avatar />
      )}

      {isWithinMaxLength && (
        <Avatar
          size={size}
          index={maxLength}
          name={avatars.length - maxLength}
          image={null}
        />
      )}
    </div>
  );
}
