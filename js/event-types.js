// Colours and labels for schema.org event types, shared by the calendar and map
export const TYPE_COLORS = {
  Event: 'dodgerblue', BusinessEvent: 'gold', CourseInstance: 'gold',
  EducationEvent: 'gold', Hackathon: 'gold', ChildrensEvent: 'deeppink',
  ComedyEvent: 'tomato', DanceEvent: 'tomato', ExhibitionEvent: 'lightsalmon',
  Festival: 'lightsalmon', FoodEvent: 'orangered', LiteraryEvent: 'mediumpurple',
  MusicEvent: 'darkslateblue', ScreeningEvent: 'lightskyblue', SocialEvent: 'yellowgreen',
  SportsEvent: 'darkorange', TheaterEvent: 'lightskyblue', VisualArtsEvent: 'lightskyblue',
}

export function typeLabel(type) {
  if (type === 'Event') return 'Uncategorized'
  if (type === 'ChildrensEvent') return "Children's"
  if (type === 'CourseInstance') return 'Course'
  return type.replace(/Event$/, '').replace(/([a-z])([A-Z])/g, '$1 $2')
}
