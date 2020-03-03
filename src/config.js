const dev = {
  STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1spbmju5dv49f"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vavt6052n9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_83XYUSOGY",
    APP_CLIENT_ID: "525qtmlho08ma0k8ais9mae3sh",
    IDENTITY_POOL_ID: "us-east-1:bd661661-dd91-4df1-a5ac-23cfdac597e3"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1feo11f6w60n8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8b0dnyto7d.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_W9p0tX0GX",
    APP_CLIENT_ID: "74o6q0frb9kb8cim97vno8duul",
    IDENTITY_POOL_ID: "us-east-1:f03b22dc-046a-4373-b1ea-c88a840838d1"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
