const resolveInitials = (fullName) => {
  const names = fullName.split(" ");
  let initials = "";

  names.forEach((name) => {
    if (name.length > 0) {
      initials += name[0].toUpperCase();
    }
    if (initials.length === 2) {
      return initials;
    }
  });

  return initials;
}

const resolveTextColor = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  return luminance > 0.4 ? "white" : "black";
}

export { resolveInitials, resolveTextColor }


