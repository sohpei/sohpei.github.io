// Sample data for artworks
const artDetails = [
    {
      image: 'example1.jpg',
      text: 'This is a detailed description of Art 1.'
    },
    {
      image: 'example2.jpg',
      text: 'This is a detailed description of Art 2.'
    },
    {
      image: 'example3.jpg',
      text: 'This is a detailed description of Art 3.'
    },
    // Add more art details as needed
  ];
  
  function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    
    modalImage.src = artDetails[index].image;
    modalText.textContent = artDetails[index].text;
    
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  // Close modal when clicking anywhere outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }