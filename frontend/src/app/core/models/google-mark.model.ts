export class GoogleMark {
  id: string;
  position: positionMark;
  label: labelMark;

  constructor(id, desc, lat, lng) {
    this.id = id;
    this.position = new positionMark(lat, lng);
    this.label = new labelMark(desc);
  }
}

class positionMark {
  constructor(public lat: number, public lng: number) {}
}

class labelMark {
  constructor(public text: string, public color: string = 'white') {}
}
