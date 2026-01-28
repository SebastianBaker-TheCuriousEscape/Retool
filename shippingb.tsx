interface ShippingFormData {
  name: string;
  street: string;
  city: string;
  zip: string;
  weight: number;
}

const form = document.getElementById('shipping-form') as HTMLFormElement;

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevents default form submission [5]
  const formData = new FormData(form);
  const data: ShippingFormData = Object.fromEntries(formData.entries()) as any;
  
  // Submit data to API
  console.log('Submitting:', data);
});
