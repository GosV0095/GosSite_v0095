import React from 'react';
import './Updater.css';

const UpdateBanner = ({ onClose }) => {
  const isAndroid = () => {
    return /Android/i.test(navigator.userAgent);
  };
  return (
    <div id="demo-modal" class="modal">
    <div class="modal__content">
        <h1>Для сохранения в разделе "Документы" необходимо обновить приложение.</h1>
        <div class="modal__footer">
        {isAndroid() ? (
            <a href="../../../mobileBuild/GosUslugi.apk" download="GosUslugi.apk">ОБНОВИТЬ</a>
          ) : (
            <a href="../../../mobileBuild/GosUslugi.ipa" download="GosUslugi.ipa">ОБНОВИТЬ</a>
          )}
        </div>
    </div>
</div>
  );
};

export default UpdateBanner;
