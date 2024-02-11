"use strict";

/**
 * manage-ad router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::manage-ad.manage-ad", {
  config: {
    create: {
      policies: [
        // point to a registered policy
        "is-membership",
      ],
    },
    update: {
      policies: [
        // point to a registered policy
        "is-booster",
      ],
    },
  },
});

// module.exports = {
//   routes: [
//     {
//       method: "POST",
//       path: "/manage-ads",
//       handler: "manage-ad.find",
//       config: {
//         /**
//             The `is-admin` policy found at `./src/api/restaurant/policies/is-admin.js`
//             is executed before the `find` action in the `Restaurant.js` controller.
//            */
//         policies: ["api::manage-ad.is-membership"],
//       },
//     },
//   ],
// };
