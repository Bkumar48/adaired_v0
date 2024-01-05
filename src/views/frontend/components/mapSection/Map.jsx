const Map = () => {
  return (
    <div className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.519824675355!2d76.73770197554111!3d30.675647188389433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed5cb98c5777%3A0x8a21444801a080f9!2sAdAired%20Digital%20Media!5e0!3m2!1sen!2sin!4v1700544011071!5m2!1sen!2sin"
        width="100%"
        height="500"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          display:"block",
          border: "none"  
        }}
      ></iframe>
    </div>
  );
};

export default Map;
