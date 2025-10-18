export const checkRole = (user, roles = []) => {
  if (!user) throw new Error("Not authenticated");
  if (!roles.includes(user.role)) throw new Error("Not authorized");
};
