import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: metrics.doubleBaseMargin,
  },
  alignVerticalCenter: {
    alignItems: 'center',
  },
  section: {
    marginVertical: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;
