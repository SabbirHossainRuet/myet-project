// const express = require("express");
// const app = express();
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51PqTJAJjhtr0rQfLOW41pikFylpJheI8jknmKEollc5wzTR5Y4ac9ViQtJ45HxG2eOv87W48FleCrrZPMBeK3z5V00tcpPizyB");

// app.use(express.json());
// app.use(cors());

// app.post("/", async (req, res) => {
//     const { products } = req.body;

//     try {
//         const lineItems = products.map((product) => ({
//             price_data: {
//                 currency: "gbp",
//                 product_data: {
//                     name: product.name,
//                 },
//                 // Use Math.round to ensure we get a proper integer for unit_amount
//                 unit_amount: Math.round(product.price * 100),  // Convert to integer in the smallest currency unit
//             },
//             quantity: 1  // Assuming quantity is 1 for now
//         }));

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: lineItems,
//             mode: "payment",
//             success_url: "http://localhost:5175/",  // Redirect to success page
//             cancel_url: "http://localhost:5175/",    // Redirect to cancel page
//         });

//         res.json({ id: session.id });
//     } catch (error) {
//         console.error("Error creating Stripe session:", error.message); // Log the error

//         // Send a proper JSON response with status code 500
//         res.status(500).json({ error: "Internal Server Error", message: error.message });
//     }
// });

// app.listen(7000, () => {
//     console.log("Server started on port 7000");
// });


const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PqTJAJjhtr0rQfLOW41pikFylpJheI8jknmKEollc5wzTR5Y4ac9ViQtJ45HxG2eOv87W48FleCrrZPMBeK3z5V00tcpPizyB");

app.use(express.json());

// CORS configuration to allow requests from your Vercel frontend
const corsOptions = {
    origin: 'https://myet-project.vercel.app',  // Allow your Vercel frontend
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/", async (req, res) => {
    const { products } = req.body;

    try {
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "gbp",
                product_data: {
                    name: product.name,
                },
                // Use Math.round to ensure we get a proper integer for unit_amount
                unit_amount: Math.round(product.price * 100),  // Convert to integer in the smallest currency unit
            },
            quantity: 1  // Assuming quantity is 1 for now
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            // Update success_url and cancel_url for Vercel frontend
            success_url: "https://myet-project.vercel.app/success",  // Redirect to success page
            cancel_url: "https://myet-project.vercel.app/cancel",    // Redirect to cancel page
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Stripe session:", error.message); // Log the error

        // Send a proper JSON response with status code 500
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

