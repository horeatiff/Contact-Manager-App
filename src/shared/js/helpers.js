export const handleRequest = (req) => {
  if (!req) return {};

  return req.data;
};

export const convertList = (list) => {
  return list.map((user) => {
    return {
      id: user.id.value,
      firstName: user.name.first,
      lastName: user.name.last,
      address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`,
      profileImage: "",
    };
  });
};
