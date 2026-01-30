// Test script to verify Sanity portfolio data
// Run this in browser console on localhost:3000

fetch('/api/test-sanity')
    .then(r => r.json())
    .then(data => {
        console.log('Portfolio Photos:', data);
        console.log('Total photos:', data.length);
    })
    .catch(err => console.error('Error:', err));
