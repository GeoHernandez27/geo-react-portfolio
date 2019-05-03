import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faMapMarkedAlt,
  faPhone,
  //faLinkedIn,
  //faGithub,
  faEnvelope,
  faLock
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
    //TO DO
    //Add linkedin and Github
    faEnvelope,
    faLock
  );
};

export default Icons;
