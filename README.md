### EasyAPI-Toolkit Documentation

#### **Overview**
`EasyAPI-Toolkit` is a lightweight library designed to simplify API interaction in JavaScript projects. It provides utility functions for making HTTP requests (GET, POST, PUT, DELETE) using Axios, handling tokens for authentication, and supporting file uploads using `multipart/form-data`.

This toolkit allows developers to focus on their application logic by offering reusable functions for typical API requests, with the flexibility to add custom error handling if needed.

## Features
- Token-based authentication using `localStorage`
- Support for file uploads using `multipart/form-data`
- Custom error handling for each request
- 10-second timeout configuration for requests

---

### **Installation**

To add `EasyAPI-Toolkit` to your project, run:

```bash
npm install easyapi-toolkit
```

Or clone the repository and manually install dependencies:

```bash
git clone https://github.com/mohammed-bakkali/EasyAPI-Toolkit.git
cd EasyAPI-Toolkit
npm install
```

---

### **Initialization**

Before using any of the request functions, initialize the API client with a base URL:

```javascript
import { initializeAPI } from "easyapi-toolkit";

// Initialize with your API's base URL
initializeAPI("https://api.example.com");
```

---

### **Usage**

1. **GET Request (Basic)**

```javascript
import { getData } from "easyapi-toolkit";

const fetchProducts = async () => {
  try {
    const data = await getData("/products");
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch products", error);
  }
};
```

2. **GET Request with Token (Authorization)**

```javascript
import { getDataWithToken } from "easyapi-toolkit";

const fetchUserProfile = async () => {
  try {
    const profile = await getDataWithToken("/user/profile");
    console.log(profile);
  } catch (error) {
    console.error("Failed to fetch profile", error);
  }
};
```

3. **POST Request (Basic)**

```javascript
import { postData } from "easyapi-toolkit";

const addProduct = async () => {
  const product = {
    name: "New Product",
    price: 29.99,
  };

  try {
    const response = await postData("/products", product);
    console.log(response);
  } catch (error) {
    console.error("Failed to add product", error);
  }
};
```

4. **POST Request with File Upload**

```javascript
import { postDataWithFile } from "easyapi-toolkit";

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await postDataWithFile("/upload/image", formData);
    console.log("Image uploaded successfully", response);
  } catch (error) {
    console.error("Failed to upload image", error);
  }
};
```

5. **PUT Request (Update Data)**

```javascript
import { updateData } from "easyapi-toolkit";

const updateProduct = async (productId, updatedData) => {
  try {
    const response = await updateData(`/products/${productId}`, updatedData);
    console.log("Product updated", response);
  } catch (error) {
    console.error("Failed to update product", error);
  }
};
```

6. **DELETE Request**

```javascript
import { deleteData } from "easyapi-toolkit";

const deleteProduct = async (productId) => {
  try {
    const response = await deleteData(`/products/${productId}`);
    console.log("Product deleted", response);
  } catch (error) {
    console.error("Failed to delete product", error);
  }
};
```

---

### **Error Handling**

By default, `EasyAPI-Toolkit` will throw an error if the request fails. However, you can also pass a custom error handler function as an argument:

```javascript
const handleError = (error) => {
  console.error("Custom error handler:", error);
};

const fetchData = async () => {
  try {
    const data = await getData("/products", null, handleError);
    console.log(data);
  } catch (error) {
    console.error("Request failed", error);
  }
};
```


### **Contributing**

If you would like to contribute to `EasyAPI-Toolkit`, feel free to submit issues or pull requests on the [GitHub repository](https://github.com/mohammed-bakkali/EasyAPI-Toolkit).

---

By using `EasyAPI-Toolkit`, developers can streamline their API interactions and avoid repeating boilerplate code for requests.
