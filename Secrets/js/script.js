function openWhatsApp(mensaje) {
    // Cambia los ceros por tu número de celular a 10 dígitos
    const telefono = "5627917174"; 
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
