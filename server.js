
    // Aapki Firebase project ki configuration
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        // ...aur bhi details
    };

    // Firebase ko initialize karein
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Form submit hone par function call karein
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault(); // Page ko reload hone se rokein

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;

        // Firestore mein data add karein
        db.collection("users").add({
            username: name,
            useremail: email
        })
        .then(() => {
            console.log("Data saved!");
            alert("Thank you! Your data has been submitted.");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    });
