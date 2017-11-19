const rolesComparator = (roles, userRoles) => roles.some(
  (accessRole) =>
    userRoles.some(
      (userRole) => accessRole === userRole)
);

export {
  rolesComparator,
};
