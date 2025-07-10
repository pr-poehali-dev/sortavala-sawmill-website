import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon
                name="TreePine"
                className="h-8 w-8 text-forest-green mr-2"
              />
              <span className="text-2xl font-bold text-forest-green">
                ЛесПром
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-forest-green transition-colors"
              >
                О компании
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-forest-green transition-colors"
              >
                Услуги
              </a>
              <a
                href="#production"
                className="text-gray-700 hover:text-forest-green transition-colors"
              >
                Производство
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-forest-green transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-forest-green hover:bg-forest-green/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-forest-green to-forest-green/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Качественные пиломатериалы
                <span className="text-wood-beige">для вашего бизнеса</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Современное производство, экологически чистые материалы,
                надежные поставки по всей России
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-white text-forest-green hover:bg-gray-100"
                >
                  <Icon name="FileText" className="mr-2 h-5 w-5" />
                  Каталог продукции
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-forest-green"
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Наши преимущества</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Объем производства</span>
                    <Badge
                      variant="secondary"
                      className="bg-wood-beige text-forest-green"
                    >
                      50,000 м³/год
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Опыт работы</span>
                    <Badge
                      variant="secondary"
                      className="bg-wood-beige text-forest-green"
                    >
                      25+ лет
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Регионы поставки</span>
                    <Badge
                      variant="secondary"
                      className="bg-wood-beige text-forest-green"
                    >
                      50+ регионов
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О компании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — ведущий производитель пиломатериалов с многолетним опытом и
              современными технологиями обработки древесины
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Award"
                  className="h-12 w-12 text-forest-green mx-auto mb-4"
                />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сертифицированное производство с контролем качества на каждом
                  этапе
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Leaf"
                  className="h-12 w-12 text-forest-green mx-auto mb-4"
                />
                <CardTitle>Экология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ответственное лесопользование и экологически чистые технологии
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Truck"
                  className="h-12 w-12 text-forest-green mx-auto mb-4"
                />
                <CardTitle>Логистика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Собственный автопарк и налаженные логистические цепочки
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный цикл производства и поставки пиломатериалов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Hammer"
                  className="h-8 w-8 text-forest-green mb-2"
                />
                <CardTitle>Обрезная доска</CardTitle>
                <CardDescription>
                  Высококачественная обрезная доска различных размеров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Толщина: 25-50 мм</li>
                  <li>• Длина: 3-6 метров</li>
                  <li>• Влажность: 8-12%</li>
                  <li>• Сорт: 1-4</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Square"
                  className="h-8 w-8 text-forest-green mb-2"
                />
                <CardTitle>Брус</CardTitle>
                <CardDescription>
                  Строительный брус для каркасного домостроения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Сечение: 100x100 - 200x200 мм</li>
                  <li>• Длина: до 6 метров</li>
                  <li>• Естественная влажность</li>
                  <li>• Камерная сушка</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Layers"
                  className="h-8 w-8 text-forest-green mb-2"
                />
                <CardTitle>Клееный брус</CardTitle>
                <CardDescription>
                  Премиальный клееный брус для элитного строительства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Сечение: до 300x300 мм</li>
                  <li>• Длина: до 12 метров</li>
                  <li>• Влажность: 10-12%</li>
                  <li>• Высший сорт</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Home" className="h-8 w-8 text-forest-green mb-2" />
                <CardTitle>Погонаж</CardTitle>
                <CardDescription>
                  Отделочные материалы для внутренних работ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Вагонка</li>
                  <li>• Наличники</li>
                  <li>• Плинтуса</li>
                  <li>• Доска пола</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Package"
                  className="h-8 w-8 text-forest-green mb-2"
                />
                <CardTitle>Пиломатериалы на заказ</CardTitle>
                <CardDescription>
                  Индивидуальные размеры под ваши проекты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Нестандартные размеры</li>
                  <li>• Специальная обработка</li>
                  <li>• Импрегнирование</li>
                  <li>• Торцевание</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="h-8 w-8 text-forest-green mb-2" />
                <CardTitle>Услуги переработки</CardTitle>
                <CardDescription>
                  Переработка давальческого сырья
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Распиловка кругляка</li>
                  <li>• Сушка пиломатериалов</li>
                  <li>• Строгание</li>
                  <li>• Упаковка</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Производство
            </h2>
            <p className="text-xl text-gray-600">
              Современное оборудование и технологии для высокого качества
              продукции
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Производственные мощности
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Icon
                      name="Factory"
                      className="h-6 w-6 text-forest-green mr-3"
                    />
                    <span className="font-medium">Лесопильные линии</span>
                  </div>
                  <span className="text-gray-600">4 линии</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Icon
                      name="Thermometer"
                      className="h-6 w-6 text-forest-green mr-3"
                    />
                    <span className="font-medium">Сушильные камеры</span>
                  </div>
                  <span className="text-gray-600">8 камер</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Icon
                      name="Gauge"
                      className="h-6 w-6 text-forest-green mr-3"
                    />
                    <span className="font-medium">Строгальные станки</span>
                  </div>
                  <span className="text-gray-600">12 станков</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Icon
                      name="Warehouse"
                      className="h-6 w-6 text-forest-green mr-3"
                    />
                    <span className="font-medium">Складские помещения</span>
                  </div>
                  <span className="text-gray-600">15,000 м²</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                src="/img/341b1a11-caf6-4ef9-9361-e81fd5334ed1.jpg"
                alt="Современное производство пиломатериалов"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект и предложить лучшие решения
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon
                    name="MapPin"
                    className="h-6 w-6 text-forest-green mr-3 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Адрес производства
                    </h4>
                    <p className="text-gray-600">
                      г. Сортавала, ул. Промышленная, 15
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Phone"
                    className="h-6 w-6 text-forest-green mr-3 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+7 (812) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Mail"
                    className="h-6 w-6 text-forest-green mr-3 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@lesprom.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Clock"
                    className="h-6 w-6 text-forest-green mr-3 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Режим работы
                    </h4>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Отправить заявку
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Опишите ваши потребности в пиломатериалах"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-forest-green hover:bg-forest-green/90">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="TreePine" className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold">ЛесПром</span>
              </div>
              <p className="text-gray-300">
                Ведущий производитель качественных пиломатериалов с 25-летним
                опытом работы
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Обрезная доска</li>
                <li>Строительный брус</li>
                <li>Клееный брус</li>
                <li>Погонаж</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (812) 123-45-67</p>
                <p>info@lesprom.ru</p>
                <p>г. Сортавала, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ЛесПром. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
