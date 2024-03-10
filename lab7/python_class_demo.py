class Cat:
    def __init__(self, name, food) -> None:
        self.name = name
        self.food = food

    def eat(self):
        print(f'{self.name} is eating {self.food}')


class Lion (Cat):
    def __init__(self, name, age, food) -> None:
        super().__init__(name, food)
        self.age = age

lion1 = Lion('Leo', 12, 'meat')
lion1.eat()
