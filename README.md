# om_uv Server

## Environment Variables

Create a `.env` file in the root of the `server` directory and add the following variables:

```env
PORT=             # Port number your server will run on
RBG_KEY=          # Your RBG encryption key
EMAIL=            # Email used for mailing services
PASSWORD=         # Email password or app-specific password
RAZORPAY_KEY_ID=  # Razorpay key ID
RAZORPAY_KEY_SECRET=  # Razorpay key secret
DB_URL=           # MongoDB connection URI (e.g., mongodb://localhost:27017/om_uv_prints)
JWT_SECRET=       # Secret key for JWT signing
JWT_EXP=          # JWT expiration (e.g., 7d)
CLOUDINARY_CLOUD_NAME=  # Your Cloudinary cloud name
CLOUDINARY_API_KEY=     # Your Cloudinary API key
CLOUDINARY_API_SECRET=  # Your Cloudinary API secret
