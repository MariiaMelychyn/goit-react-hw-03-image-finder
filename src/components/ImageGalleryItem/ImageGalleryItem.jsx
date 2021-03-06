import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import Modal from '../Modal';

class ImageGalleryItem extends Component {
    state ={
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
          showModal: !showModal,
        }));
      };
    
      render() {
        const { src, alt, largeImageUrl } = this.props;
        const { showModal } = this.state;
        return (
          <li className="ImageGalleryItem">
            <img
              onClick={this.toggleModal}
              src={src}
              alt={alt}
              className="ImageGalleryItemImage"
            />
            {showModal && (
              <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
            )}
          </li>
        );
      }
      static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        largeImageUrl: PropTypes.string.isRequired,
      };
    }
    
    
    export default ImageGalleryItem;
