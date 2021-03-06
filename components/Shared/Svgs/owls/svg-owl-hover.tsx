import { motion, Variants } from "framer-motion";
import React from "react";

export default function SvgOwlHover() {
  const wingVariantsDown: Variants = {
    visible: {
      rotate: -4,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  const wingVariantsUp: Variants = {
    visible: {
      rotate: 4,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  const tailVariants: Variants = {
    visible: {
      rotateX: 30,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="141.389"
      height="125"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 141.389 116.717"
      xmlSpace="preserve"
    >
      <g transform="translate(-79.297 -92.632)">
        <motion.path
          variants={tailVariants}
          animate="visible"
          fill="#34130f"
          d="M168.973 182.706h-37.962s-.58 8.385 3.919 16.78c4.499 8.395 5.868-4.015 5.868-4.015s.677 2.92 4.217 9.308c1.611 2.906 3.395 4.494 5.153 4.57 1.726-.076 3.477-1.664 5.058-4.57 3.476-6.388 4.14-9.308 4.14-9.308s1.344 12.41 5.76 4.015c4.416-8.395 3.847-16.78 3.847-16.78z"
        ></motion.path>
        <path
          fill="#c8b5ac"
          d="M186.273 147.816c-3.35-9.365.426-14.743.426-14.743h-73.188s3.761 5.373.425 14.743c-5.577 15.668 2.986 39.408 36.062 39.408h.213c33.076.001 41.014-25.57 36.062-39.408z"
        ></path>
        <g>
          <g>
            <path
              fill="#34130f"
              d="M119.292 92.997c-.663-.291-1.452-.548-2.083-.192-.626.354-.819 1.206-.633 1.901.187.694.665 1.268 1.129 1.817l1.631 1.928a61.886 61.886 0 00-6.289-2.632c-1-.355-2.553-.361-2.647.695-.037.415.217.795.474 1.123a12.931 12.931 0 002.833 2.658 10.972 10.972 0 00-7.393-.454c-.281.083-.574.187-.761.413-.519.629.145 1.539.804 2.019 3.304 2.408 7.512 3.195 11.59 3.484a58.129 58.129 0 0019.5-1.939c-3.59-1.263-12.025-8.135-18.155-10.821z"
            ></path>
          </g>
          <g>
            <path
              fill="#34130f"
              d="M180.689 92.997c.664-.291 1.452-.548 2.083-.192.626.354.819 1.206.632 1.901-.186.694-.664 1.268-1.129 1.817l-1.631 1.928a61.886 61.886 0 016.289-2.632c.998-.355 2.553-.361 2.646.695.037.415-.217.795-.474 1.123a12.976 12.976 0 01-2.833 2.658 10.972 10.972 0 017.393-.454c.281.083.574.187.762.413.52.629-.145 1.539-.804 2.019-3.304 2.408-7.512 3.195-11.591 3.484a58.131 58.131 0 01-19.5-1.939c3.593-1.263 12.029-8.135 18.157-10.821z"
            ></path>
          </g>
        </g>
        <path
          fill="#632811"
          d="M193.645 151.266c-.68-12.056-1.92-41.814-1.92-41.814s-18.678-10.16-41.74-10.185c-23.062.025-41.74 10.185-41.74 10.185s-1.158 28.072-1.91 41.814c-.671 12.263 2.687 42.64 43.523 42.64h.264c40.835-.001 44.214-30.379 43.523-42.64z"
        ></path>
        <path
          fill="#c8b5ac"
          d="M190.506 161.827c-.877-7.178-4.563-14.046-10.247-19.098h-60.535c-5.684 5.052-9.37 11.92-10.248 19.098-.223 1.821.106 4.206 2.057 4.678 2.552.617 6.56-2.228 6.56-2.228s-3.375 6.193-1.736 9.551c.923 1.891 3.825 2.342 6.056 1.922 2.23-.422 4.164-1.639 6.028-2.828-.579 1.281-1.165 2.586-1.303 3.965-.137 1.379.238 2.869 1.339 3.827 1.38 1.201 3.548 1.297 5.407.892 2.826-.616 5.273-2.174 7.645-3.699-1.108 3.064 2.473 10.516 8.295 10.516 5.823 0 9.739-7.451 8.631-10.516 2.372 1.525 4.819 3.083 7.646 3.699 1.858.405 4.026.31 5.406-.892 1.102-.958 1.477-2.448 1.339-3.827-.138-1.379-.724-2.684-1.302-3.965 1.863 1.189 3.797 2.406 6.027 2.828 2.23.42 5.133-.031 6.056-1.922 1.64-3.357-1.736-9.551-1.736-9.551s4.007 2.845 6.56 2.228c1.949-.472 2.278-2.857 2.055-4.678z"
        ></path>
        <g fill="#e2dad6">
          <path d="M149.984 175.324L149.999 175.324 149.991 175.323z"></path>
          <path d="M192.449 144.566c-.49-4.096-1.968-7.643-4.369-10.998h-76.178c-2.401 3.355-3.879 6.902-4.369 10.998-.175 1.467.189 3.055 1.383 3.924 1.99 1.447 6.748-2.499 6.748-2.499s-2.719 6.217-.559 9.229c.909 1.268 2.848 1.38 4.255.708 1.407-.672 2.42-1.94 3.383-3.167-.351 1.748-.704 3.525-.554 5.302.15 1.776.875 3.585 2.306 4.649 1.521 1.13 3.631 1.242 5.43.648s3.329-1.812 4.662-3.159c-.776 3.176-1.328 7.444 1.52 9.051 2.847 1.606 6.199-.564 8.515-2.872 0 0-.843 8.936 5.37 8.942 6.214-.007 5.37-8.942 5.37-8.942 2.316 2.308 5.667 4.479 8.515 2.872 2.848-1.607 2.296-5.875 1.521-9.051 1.332 1.348 2.861 2.565 4.66 3.159 1.8.594 3.91.481 5.432-.648 1.431-1.064 2.154-2.873 2.305-4.649.151-1.776-.203-3.554-.554-5.302.963 1.227 1.976 2.495 3.384 3.167 1.406.672 3.346.56 4.254-.708 2.16-3.012-.559-9.229-.559-9.229s4.758 3.946 6.747 2.499c1.193-.868 1.557-2.457 1.382-3.924z"></path>
        </g>
        <g>
          <g>
            <g>
              <g>
                <path
                  fill="#c97029"
                  d="M121.442 186.071c-1.101 2.202-1.06 4.938.107 7.104.527.982 1.538 1.94 2.615 1.652.551-.148.969-.596 1.296-1.064 1.469-2.106 1.595-5.069.312-7.294-.544-.942-1.44-1.809-2.528-1.829-1.088-.021-1.441.576-1.802 1.431"
                ></path>
              </g>
              <g>
                <path
                  fill="#c97029"
                  d="M125.776 186.199c-1.265 2.399-1.217 5.381.124 7.743.606 1.069 1.768 2.113 3.005 1.799.633-.16 1.113-.648 1.489-1.159 1.688-2.296 1.833-5.524.357-7.948-.625-1.027-1.654-1.971-2.905-1.993-1.249-.024-1.655.626-2.07 1.558"
                ></path>
              </g>
              <g>
                <path
                  fill="#c97029"
                  d="M130.978 186.071c-1.101 2.202-1.06 4.938.107 7.104.528.982 1.538 1.94 2.615 1.652.552-.148.97-.596 1.296-1.064 1.469-2.106 1.596-5.069.312-7.294-.544-.942-1.439-1.809-2.528-1.829-1.089-.021-1.441.576-1.802 1.431"
                ></path>
              </g>
              <g>
                <path
                  fill="#a75025"
                  d="M126.3 191.83c-.327.469-.745.916-1.296 1.064-1.077.287-2.088-.67-2.615-1.652-.965-1.793-1.147-3.969-.563-5.916a4.28 4.28 0 00-.383.745c-1.101 2.202-1.06 4.938.107 7.104.527.982 1.538 1.94 2.615 1.652.551-.148.969-.596 1.296-1.064a6.583 6.583 0 00.951-2.123c-.04.062-.07.13-.112.19z"
                ></path>
              </g>
              <g>
                <path
                  fill="#a75025"
                  d="M131.234 192.648c-.376.51-.856.998-1.489 1.158-1.237.314-2.398-.729-3.005-1.799-1.104-1.945-1.316-4.307-.656-6.421a6.34 6.34 0 00-.308.612c-1.265 2.399-1.217 5.381.124 7.743.606 1.069 1.768 2.113 3.005 1.799.633-.16 1.113-.648 1.489-1.159a7.019 7.019 0 001.105-2.361c-.088.142-.165.292-.265.428z"
                ></path>
              </g>
              <g>
                <path
                  fill="#a75025"
                  d="M135.835 191.83c-.326.469-.744.916-1.296 1.064-1.077.287-2.087-.67-2.615-1.652-.965-1.792-1.147-3.969-.564-5.914a4.291 4.291 0 00-.383.743c-1.101 2.202-1.06 4.938.107 7.104.528.982 1.538 1.94 2.615 1.652.552-.148.97-.596 1.296-1.064a6.588 6.588 0 00.951-2.124c-.038.062-.068.131-.111.191z"
                ></path>
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <path
                  fill="#c97029"
                  d="M178.559 186.071c1.075 2.202 1.035 4.938-.105 7.104-.516.982-1.502 1.94-2.555 1.652-.539-.148-.947-.596-1.267-1.064-1.435-2.106-1.558-5.069-.304-7.294.531-.942 1.406-1.809 2.47-1.829 1.063-.021 1.408.576 1.761 1.431"
                ></path>
              </g>
              <g>
                <path
                  fill="#c97029"
                  d="M174.324 186.199c1.235 2.399 1.188 5.381-.121 7.743-.593 1.069-1.728 2.113-2.937 1.799-.618-.16-1.087-.648-1.455-1.159-1.648-2.296-1.79-5.524-.349-7.948.61-1.027 1.615-1.971 2.838-1.993 1.222-.024 1.618.626 2.024 1.558"
                ></path>
              </g>
              <g>
                <path
                  fill="#c97029"
                  d="M169.242 186.071c1.075 2.202 1.035 4.938-.105 7.104-.516.982-1.502 1.94-2.555 1.652-.539-.148-.947-.596-1.266-1.064-1.436-2.106-1.56-5.069-.305-7.294.531-.942 1.406-1.809 2.471-1.829 1.063-.021 1.407.576 1.76 1.431"
                ></path>
              </g>
              <g>
                <path
                  fill="#a75025"
                  d="M173.813 191.83c.318.469.728.916 1.266 1.064 1.053.287 2.039-.67 2.555-1.652.943-1.793 1.121-3.969.551-5.916.141.213.259.463.375.745 1.075 2.202 1.035 4.938-.105 7.104-.516.982-1.502 1.94-2.555 1.652-.539-.148-.947-.596-1.267-1.064a6.687 6.687 0 01-.929-2.123c.038.062.067.13.109.19z"
                ></path>
              </g>
              <g>
                <path
                  fill="#a75025"
                  d="M168.992 192.648c.367.51.836.998 1.455 1.158 1.208.314 2.343-.729 2.936-1.799 1.078-1.945 1.286-4.307.641-6.421.107.185.203.39.301.612 1.235 2.399 1.188 5.381-.121 7.743-.593 1.069-1.728 2.113-2.937 1.799-.618-.16-1.087-.648-1.455-1.159-.512-.713-.86-1.521-1.08-2.361.086.142.162.292.26.428z"
                ></path>
              </g>
              <g>
                <path
                  fill="#a75025"
                  d="M164.496 191.83c.318.469.727.916 1.266 1.064 1.053.287 2.039-.67 2.555-1.652.943-1.792 1.121-3.969.552-5.914.14.212.258.461.374.743 1.075 2.202 1.035 4.938-.105 7.104-.516.982-1.502 1.94-2.555 1.652-.539-.148-.947-.596-1.266-1.064a6.672 6.672 0 01-.93-2.124c.039.062.068.131.109.191z"
                ></path>
              </g>
            </g>
          </g>
        </g>
        <g>
          <g>
            <motion.path
              variants={wingVariantsUp}
              animate="visible"
              fill="#34130f"
              d="M113.065 134.575c-10.78-5.003-33.768.96-33.768 3.533s11.969 3.072 11.969 3.072-4.572 2.153-9.362 6.092c-.446.367-.92.823-.914 1.401.012 1.071 1.479 1.359 2.546 1.265a41.747 41.747 0 008.149-1.548 40.077 40.077 0 00-6.537 7.323c-1.051 1.518-1.942 3.741-.628 5.038 1.055 1.041 2.806.69 4.2.187 9.965-3.596 20.353-16.55 24.345-26.363"
            ></motion.path>
            <motion.path
              variants={wingVariantsDown}
              animate="visible"
              fill="#34130f"
              d="M186.918 134.575c10.779-5.003 33.768.96 33.768 3.533s-11.969 3.072-11.969 3.072 4.572 2.153 9.361 6.092c.446.367.92.823.914 1.401-.012 1.071-1.479 1.359-2.547 1.265a41.752 41.752 0 01-8.148-1.548 40.004 40.004 0 016.537 7.323c1.051 1.518 1.942 3.741.629 5.038-1.055 1.041-2.807.69-4.2.187-9.965-3.596-20.354-16.55-24.345-26.363"
            ></motion.path>
          </g>
        </g>
        <path
          fill="#c8b5ac"
          d="M161.875 106.298c-9.395 3.635-11.884 19.976-11.884 19.976s-2.49-16.341-11.884-19.976c-15.066-5.829-33.941 7.061-27.117 27.799 15.272 3.496 30.118 11.839 39 21.873 8.883-10.033 23.729-18.377 39.001-21.873 6.825-20.738-12.05-33.627-27.116-27.799z"
        ></path>
        <g>
          <g>
            <g>
              <path
                fill="#37140f"
                d="M155.688 122.511c0-8.03 7.443-14.541 15.473-14.541 8.03 0 15.262 6.51 15.262 14.541 0 6.833-8.506 15.554-16.516 14.986-7.459-.529-14.219-6.956-14.219-14.986z"
              ></path>
              <circle cx="171.056" cy="122.511" r="13.06" fill="#fff"></circle>
              <circle
                cx="171.104"
                cy="120.306"
                r="10.438"
                fill="#010101"
              ></circle>
              <circle cx="172.527" cy="115.243" r="2.777" fill="#fff"></circle>
              <circle cx="176.692" cy="118.917" r="1.388" fill="#fff"></circle>
            </g>
          </g>
          <g>
            <g>
              <path
                fill="#37140f"
                d="M113.56 122.511c0-8.03 7.442-14.541 15.471-14.541 8.03 0 15.263 6.51 15.263 14.541 0 6.833-8.507 15.554-16.516 14.986-7.458-.529-14.218-6.956-14.218-14.986z"
              ></path>
              <circle cx="128.927" cy="122.511" r="13.06" fill="#fff"></circle>
              <circle
                cx="128.976"
                cy="120.306"
                r="10.437"
                fill="#010101"
              ></circle>
              <circle cx="130.399" cy="115.243" r="2.777" fill="#fff"></circle>
              <circle cx="134.564" cy="118.917" r="1.388" fill="#fff"></circle>
            </g>
          </g>
        </g>
        <g>
          <path
            fill="#34130f"
            d="M155.419 103.723l-.034.021c-1.124.704-2.006 1.725-2.871 2.73.385-1.56.773-3.176.494-4.758-.28-1.583-1.414-3.132-3.004-3.365h-.024c-1.59.233-2.725 1.782-3.004 3.365-.279 1.583.108 3.198.494 4.758-.865-1.006-1.748-2.027-2.872-2.73l-.034-.021c-1.9-1.171-4.273.578-3.899 2.778.417 2.451 1.816 4.851 3.177 7.013l3.955 6.287h4.392l3.954-6.287c1.36-2.162 2.761-4.562 3.177-7.013.372-2.201-2.001-3.949-3.901-2.778z"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#a54324"
              d="M146.863 124.958s.698 3.991 3.477 3.991 2.779-4.135 2.779-4.135z"
            ></path>
          </g>
          <g>
            <path
              fill="#c97029"
              d="M150.098 116.888c-1.856-.014-3.967 5.94-4.134 8.695l8.051-.185c.094-.417-2.06-8.496-3.917-8.51z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}