
const Regex = {
    MOBILE_REGEX    :   /^([+]\d{2})?\d{9}$/,
    EMAIL_REGEXP    :   /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/,
    USERNAME_REGEX  :   /^[0-9a-zA-Z]+$/,
    DNI_REGEX       :   /^(\d{8})([A-Z])$/,
    CIF_REGEX       :   /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/,
    NIE_REGEX       :   /^[XYZ]\d{7,8}[A-Z]$/,
    FULL_NAME_REGEX :   /^[a-zA-Z ]+$/,
    PASSWORD_REGEX  :   /^[0-9a-zA-Z]{6,20}$/,
    ACCOUNT_NUMBER_REGEX  : /^(\d{22})$/,
    NIF_REGEX       :   /^(\d{8})([A-Z])$|^[XYZ]\d{7,8}[A-Z]$/,
    NUMERIC_REGEX   :   /[^0-9]/g,
  }
  
  export default Regex