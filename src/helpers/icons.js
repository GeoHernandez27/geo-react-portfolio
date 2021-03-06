import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faLock,
  faFileAlt,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faMapMarkedAlt,
    faPhone,
    faEnvelope,
    faLock,
    faFileAlt,
    faBars,
    fab );
};

export default Icons;
