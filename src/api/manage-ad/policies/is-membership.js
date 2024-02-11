module.exports = async (policyContext, config, { strapi }) => {
  // Assuming the user is authenticated and their membership information is available in the context
  const userId = policyContext.state.user;
  console.log("UserID", userId);
  if (userId) {
    return true;
  }

  // Retrieve user's membership information from an API endpoint
  //   const userMembershipResponse = await strapi
  //     .query("membership")
  //     .findOne({ user: userId });

  //   const entry = await strapi.entityService.findOne(
  //     "plugin::users-permissions.user",
  //     userId,
  //     {
  //       populate: "*",
  //     }
  //   );

  // console.log("entry", entry);

  //   console.log("userMembershipResponse", userMembershipResponse);

  // Extract the membership package details
  // const userMembershipPackage = userMembershipResponse.package; // Assuming the package is stored under the 'package' field

  // Assuming the user's attempted action is publishing an ad
  //   if (
  //     policyContext.state.route.method === "GET" &&
  //     policyContext.state.route.controller === "manage-ad" &&
  //     policyContext.state.route.action === "find"
  //   ) {
  //     // Retrieve the allowed number of ads from the user's membership package
  //     // const allowedAds = userMembershipPackage.allowedAds; // Assuming the allowedAds field exists in the membership package

  //     // Assuming the user's current number of published ads is available in the database
  //     const userPublishedAds = await strapi
  //       .query("manage-ads")
  //       .count({ user: userId });

  //     console.log("userPublishedAds", userPublishedAds);

  //     // If the user publishes one more ad, will they exceed their limit?
  //     // if (userPublishedAds + 1 <= allowedAds) {
  //     //   // User is allowed to publish the ad
  //     //   return true;
  //     // } else {
  //     //   // User is not allowed to publish the ad
  //     //   return false;
  //     // }
  //     return false;
  //   }

  // For other routes or methods, allow access
  return false;
};
