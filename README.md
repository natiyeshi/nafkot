# Nafkot

Nafkot is an eCommerce platform designed to connect individuals worldwide with their loved ones in Ethiopia. It enables users to purchase items for their families in Ethiopia, as well as top-up mobile cards and packages. The platform integrates secure payment methods to facilitate seamless transactions directly on the website.

---

## Features

### 1. Cross-Border eCommerce
- Users can buy items from other countries for their families in Ethiopia.

### 2. Mobile Top-Up Services
- Enables users outside Ethiopia to purchase and send mobile airtime and packages to their loved ones locally.

### 3. Integrated Payment Gateway
- Secure and reliable payment methods for a seamless checkout experience.

---

## Instructions to Build and Run the Project

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **NPM** or **Yarn**
- Ensure you have internet access for dependencies and APIs

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/natiyeshi/nafkot.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd nafkot
   ```

3. **Install Dependencies**
   - For the client:
     ```bash
     cd client
     npm install
     ```
   - For the server:
     ```bash
     cd ../server
     npm install
     ```

4. **Set Up Environment Variables**
   - Create a `.env` file in both `client` and `server` directories (if not provided).
   - Add the necessary API keys, database URLs, and configurations as described in the project documentation.

5. **Start the Application**
   - Start the server:
     ```bash
     cd server
     npm start
     ```
   - Start the client:
     ```bash
     cd ../client
     npm start
     ```

6. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`.

---

## Summary of Functions Implemented

### **Client-Side**
- **Homepage**: Displays featured products and top-up services.
- **Product Pages**: Detailed descriptions, pricing, and options to purchase items.
- **Top-Up Services**: Platform to select and send mobile packages.
- **Cart and Checkout**: Allows users to manage their purchases and securely pay.

### **Server-Side**
- **Authentication**: Handles user registration and login securely.
- **API Endpoints**:
  - Fetch products, categories, and top-up options.
  - Manage user orders and transaction details.
- **Payment Integration**: Securely processes payments using third-party gateways.
- **Database Management**: Stores and retrieves user, product, and order information.

---

## Contribution
Contributions are welcome! Fork the repository, make your changes, and submit a pull request. For significant updates, please open an issue first to discuss proposed changes.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
Thank you for using Nafkot! For any inquiries, please contact the project maintainer at [email@example.com].

