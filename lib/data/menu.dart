class MenuItem {
  final String name;
  bool isSpecialItem;

  MenuItem(this.name, {this.isSpecialItem = false});

  static List<MenuItem> all() => [
    MenuItem("Services"),
    MenuItem("Clients"),
    MenuItem("About Us"),
    MenuItem("Resources"),
    MenuItem("Blog"),
    MenuItem("Code stories"),
    MenuItem("Careers"),
    MenuItem("Estimate project", isSpecialItem: true)
  ];
}