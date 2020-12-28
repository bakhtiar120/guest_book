import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from './Colors';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const ratio_x = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratio_y = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 16;
const unit = base_unit * ratio_x;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

export default Styles = StyleSheet.create({
  container_main_absolute: {
    // alignItems:'center',
    flex: 1,
    backgroundColor: Colors.white,
  },
  my_card: {
    margin: 5,
  },
  card_view: {
    flexDirection: 'row',
    padding: 6,
  },
  text_home: {
    fontSize: 20,
    marginLeft: 10,
  },
  container_center: {
    backgroundColor: Colors.white,

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  container_logo: {
    flexGrow: 1,

    justifyContent: 'flex-end',

    alignItems: 'center',
  },
  logo_size: {
    width: 200,
    height: 200,
  },
  text_login: {
    marginVertical: 15,

    fontSize: 18,

    color: 'red',
  },
  text_bold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  form_input: {
    width: 300,

    backgroundColor: 'grey',

    borderRadius: 25,

    paddingHorizontal: 16,
    textAlign: 'center',

    fontSize: 16,

    color: '#ffffff',

    marginVertical: 10,
  },
  button_standard: {
    width: 300,

    backgroundColor: '#1c313a',

    borderRadius: 25,

    marginVertical: 10,

    paddingVertical: 13,
  },
  text_button: {
    fontSize: 16,

    fontWeight: '500',

    color: '#ffffff',

    textAlign: 'center',
  },
  imageGallery: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});
