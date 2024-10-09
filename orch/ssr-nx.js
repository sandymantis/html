 <script>
    // Get the current timestamp (datetime)
    const cacheBust = new Date().getTime(); // Generates a unique value based on the current timestamp
    
    // Create a new script element
    const script = document.createElement('script');
    
    // Add the script src with cache busting
    script.src = './shell.js?cacheBust=' + cacheBust;
    
    // Append the script element to the body to execute it
    document.body.appendChild(script);

    console.log('Shell script loaded with cache bust:', script.src);
  </script>
