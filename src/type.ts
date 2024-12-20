export interface Event {
  id: number
  rank: string
  rankChangeType: string
  countryName: string
  goldMedalNum: string
  silverMedalNum: string
  bronzeMedalNum: string
  totalMedalNum: string
}
export interface MedalEvent {
  id: number;
  countryName: string;
  medals: string;
}
export interface Comment {
  id: string;
  text: string;
  eventId: string;
}
export interface StudentEvent {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  penAmount: number
  description: string
}
export interface MessageState {
  message: string
}
export interface EventState {
  event: Event | null
}