
function Mapa() {
  
  return (
    <div className="map-container" style={{ width: '100%', height: '600px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7692748535155!2d-58.706581524260564!3d-34.58470417296114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbdda04caf6e9%3A0x9bb3fd5b9e0799ec!2sMayor%20Irusta%203778%2C%20B1661IRN%20Bella%20Vista%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1719690657797!5m2!1ses-419!2sar"
        width="100%"
        height="600"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default Mapa;
