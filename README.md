# Ecommerce Project(react+redux)

This is a complete e-commerce project built with React and Redux. It includes various features such as product listing, cart management, user authentication, and payment integration.

## Project Structure

```
Ecommerce-Vite-App/
├── .eslintrc.cjs
├── .firebase
├── .firebaserc
├── .gitignore
├── build
├── dist
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── assets
│   ├── components
│   │   ├── layout
│   │   └── modal
│   ├── context
│   ├── firebase
│   ├── pages
│   │   └── Cart.js
│   ├── redux
│   └── styles
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

This representation should display the directory structure of your project clearly within a Markdown file.

### Key Files and Directories

- `src/`: Contains the source code for the project.
  - `components/`: Reusable components.
  - `context/`: Context API for global state management.
  - `firebase/`: Firebase configuration and initialization.
  - `pages/`: Different pages of the application, including `Cart.js`.
  - `redux/`: Redux store configuration and slices.
  - `styles/`: Styling files.
- `index.html`: The main HTML file.
- `package.json`: Project dependencies and scripts.
- `tailwind.config.js`: Tailwind CSS configuration.
- `vite.config.js`: Vite configuration.

## Cart Component

The `Cart` component is responsible for displaying and managing the items in the user's cart. It includes features such as:

- Displaying cart items with details like title, description, price, and image.
- Removing items from the cart.
- Calculating the total amount and grand total (including shipping).
- Payment integration with Razorpay.

### Key Functions and Features

- **Cart Items Display**: Lists all items added to the cart.
- **Delete Cart Item**: Allows users to remove items from the cart.
- **Total Amount Calculation**: Calculates the total price of items in the cart.
- **Shipping and Grand Total**: Adds shipping cost to the total amount to calculate the grand total.
- **Payment Integration**: Integrates Razorpay for handling payments.

### Environment Variables

To keep sensitive information secure, API keys and secrets are stored in environment variables. Ensure you have a `.env` file in the root of your project with the following variables:

\```
VITE_RAZORPAY_KEY=your_razorpay_key
VITE_RAZORPAY_SECRET=your_razorpay_secret
\```

### Usage

1. **Clone the repository**:

   \```bash
   git clone <repository_url>
   cd Ecommerce-Vite-App
   \```

2. **Install dependencies**:

   \```bash
   npm install
   \```

3. **Start the development server**:

   \```bash
   npm run dev
   \```

4. **Build the project**:

   \```bash
   npm run build
   \```

5. **Deploy the project** (optional, e.g., on Vercel):

   \```bash
   vercel
   \```

### Important Notes

- Ensure you do not expose your API keys in the code. Use environment variables as shown.
- The project uses Tailwind CSS for styling and Vite for fast development and build processes.
