const modalContainer = document.getElementById('modal-container');

const showModal = () => {
	modalContainer.classList.add('show-modal');
	console.log('write message clicked');
};

const closeModal = () => {
	console.log('send clicked');
	modalContainer.classList.remove('show-modal');
};
