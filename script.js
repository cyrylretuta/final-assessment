<script>
        function toggleMode() {
            document.body.classList.toggle("light-mode");
        }

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent successfully!");
            this.reset();
        });
 </script>
