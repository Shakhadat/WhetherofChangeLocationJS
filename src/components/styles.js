import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 10,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#3c4560',
    fontWeight: '600',
  },
  image: {},
  category: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3c4560',
    marginTop: 4,
    marginRight: 4,
  },
  dateStyle: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
    color: '#3c4560',
  },
  safeCont: {
    flex: 1,
  },
});

export const markdownStyle = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
  },
  heading3: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#2c3e50',
    fontWeight: '800',
    marginTop: 5,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#2c3e50',
  },
  text: {
    marginTop: 20,
    color: '#3c4560',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.7,
  },
  link: {
    fontWeight: '600',
    fontSize: 18,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#4775f2',
  },
  // Blockquotes
  blockquote: {
    // paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 6,
    borderLeftWidth: 7,
    fontStyle: 'italic',
    borderLeftColor: '#212C4F',
    backgroundColor: '#f0f3f5',
  },
  strong: {
    fontWeight: '700',
    color: '#3c4560',
    fontSize: 18,
  },
  code_inline: {
    padding: 0,
    backgroundColor: '#212C4F',
    color: 'white',
    fontSize: 18,
  },

  fence: {
    borderLeftWidth: 5,
    borderLeftColor: '#823eb7',
    backgroundColor: '#212C4F',
    padding: 10,
    color: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    fontSize: 18,
  },
  code_block: {
    borderLeftWidth: 5,
    borderLeftColor: '#823eb7',
    backgroundColor: '#212C4F',
    padding: 10,
    color: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    fontSize: 18,
  },
  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: 10,
    fontSize: 50,
    color: '#212C4F',
    marginRight: 10,
    ...Platform.select({
      android: {
        marginTop: 5,
      },
      ios: {
        marginTop: 0,
      },
      default: {
        marginTop: 0,
      },
    }),
    ...Platform.select({
      ios: {
        lineHeight: 45,
      },
      android: {
        lineHeight: 30,
      },
      default: {
        lineHeight: 36,
      },
    }),
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1,
    flexWrap: 'wrap',
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    color: '#212C4F',
    ...Platform.select({
      android: {
        marginTop: 4,
      },
      default: {
        marginTop: 0,
      },
    }),
    ...Platform.select({
      ios: {
        lineHeight: 45,
      },
      android: {
        lineHeight: 30,
      },
      default: {
        lineHeight: 40,
      },
    }),
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1,
    flexWrap: 'wrap',
  },
});