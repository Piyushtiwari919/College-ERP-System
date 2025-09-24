let toastContainer: HTMLElement | null = null;

export const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
  // Create toast container if it doesn't exist
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed top-4 right-4 z-50 space-y-2';
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement('div');
  const colorMap = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-blue-600'
  };

  toast.className = `${colorMap[type]} text-white px-6 py-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 flex items-center space-x-3 max-w-sm`;
  
  const iconMap = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  toast.innerHTML = `
    <span class="text-xl">${iconMap[type]}</span>
    <span class="flex-1">${message}</span>
    <button class="text-white hover:text-gray-200 text-xl leading-none">&times;</button>
  `;

  // Add close functionality
  const closeButton = toast.querySelector('button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      removeToast(toast);
    });
  }

  toastContainer.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-x-full');
  }, 100);

  // Auto remove after 4 seconds
  setTimeout(() => {
    removeToast(toast);
  }, 4000);
};

const removeToast = (toast: HTMLElement) => {
  toast.classList.add('translate-x-full');
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
};