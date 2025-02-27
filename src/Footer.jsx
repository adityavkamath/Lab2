import PropTypes from "prop-types";
const Footer = ({ copyright }) => {
  return (
    <footer className='bottom-0 left-0 relative w-full bg-black rounded-md px-4 py-2 text-white'>
      <p>{copyright}</p>
    </footer>
  );
};
Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};
export default Footer;
