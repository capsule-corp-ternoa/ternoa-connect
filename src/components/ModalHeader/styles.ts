export default {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3817B8',
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: '900',
    color: '#FFF',
    textTransform: 'capitalize' as const,
  },
  selectorContainer: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: '900',
    color: '#FFF',
  },
  section: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#FFF',
  },
  close: {
    position: 'absolute' as const,
    right: 8,
  },
}
