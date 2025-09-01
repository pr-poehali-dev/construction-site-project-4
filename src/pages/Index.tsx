import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    { 
      icon: "HardHat", 
      title: "Монолитные работы", 
      description: "МКД и ИЖС",
      details: ["МКД", "ИЖС"]
    },
    { 
      icon: "Building2", 
      title: "Генеральный подряд", 
      description: "Полный цикл строительства под ключ",
      details: []
    },
    { 
      icon: "Settings", 
      title: "Инженерные сети", 
      description: "Теплосети, водопровод, канализация",
      details: ["Теплосети", "Водопровод", "Канализация"]
    },
    { 
      icon: "Factory", 
      title: "Промышленное строительство", 
      description: "Склады, сортировочные центры, ангары",
      details: ["Склады", "Сортировочные центры", "Ангары"]
    },
    { 
      icon: "Truck", 
      title: "Земляные работы", 
      description: "Разработка котлованов, рекультивация",
      details: ["Разработка котлованов", "Рекультивация земель"]
    },
    { 
      icon: "Trees", 
      title: "Благоустройство", 
      description: "Комплексное благоустройство территорий",
      details: []
    },
    { 
      icon: "Building", 
      title: "Коммерческое строительство", 
      description: "Паркинги, спорткомплексы, МФЦ",
      details: ["Паркинги", "Спорткомплексы", "МФЦ"]
    },
    { 
      icon: "PenTool", 
      title: "Проектирование", 
      description: "Архитектурное и техническое проектирование",
      details: []
    }
  ];

  const projects = [
    { title: "ЖК Алхимово 5 очередь", type: "Монолитные работы", area: "17,000 м³", client: "ГК Самолет" },
    { title: "ЖК Остафьево 4 очередь", type: "Монолитные работы", area: "12,000 м³", client: "ГК Самолет" },
    { title: "ЖК Квартал Марьино 1 очередь", type: "Монолитные работы", area: "18,000 м³", client: "ГК Самолет" },
    { title: "ЖК Квартал Строгино 1 очередь", type: "Монолитные работы", area: "17,000 м³", client: "ГК Самолет" },
    { title: "ЖК Молжаниново 3 очередь, дом 6", type: "Монолитные работы", area: "8,000 м³", client: "ГК Самолет" },
    { title: "ЖК Пятницкие Луга, Паркинг", type: "Монолитные работы", area: "3,000 м³", client: "ГК Самолет" },
    { title: "ЖК Пятницкие Луга, Детский сад", type: "Монолитные работы", area: "2,400 м³", client: "ГК Самолет" },
    { title: "ЖК Пятницкие Луга, ЛОС", type: "Монолитные работы", area: "4,000 м³", client: "ГК Самолет" },
    { title: "Объект 11 парковая, корпус 38 и 39", type: "Монолитные работы", area: "42,000 м³", client: "ПИК" },
    { title: "Спорткомплекс Парк Малевича", type: "Монолитные работы", area: "4,500 м³", client: "ООО Премиум Строй" },
    { title: "Банный комплекс с бассейном Парк Малевича", type: "Монолитные работы", area: "4,700 м³", client: "ООО Рост" },
    { title: "ЖК Монс", type: "Монолитные работы", area: "68,000 м³", client: "Брусника" },
    { title: "ЖК Первый Квартал, Видное", type: "Монолитные работы", area: "54,000 м³", client: "Брусника" }
  ];

  const certificates = [
    "ISO 9001:2015",
    "ISO 14001:2015", 
    "OHSAS 18001",
    "СРО проектирование",
    "СРО строительство"
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <Icon name="Building2" size={80} className="text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-steel-light bg-clip-text text-transparent">
            СУ-77
          </h1>
          <p className="text-xl md:text-2xl text-steel-light mb-8 max-w-3xl mx-auto">
            Промышленное строительство с гарантией качества. 
            Реализуем проекты любой сложности с применением передовых технологий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-steel text-white hover:bg-steel/20">
              <Icon name="FileText" size={20} className="mr-2" />
              Наши проекты
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-pulse" />
        <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-steel/40 rotate-12" />
      </section>

      {/* About & Certificates Section */}
      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О компании</h2>
              <p className="text-steel-light mb-6 text-lg leading-relaxed">
                Мы — ведущая строительная компания с 15-летним опытом в промышленном строительстве. 
                Наша команда профессионалов реализует проекты от проектирования до сдачи объекта.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-steel-light">Завершенных проектов</div>
                </div>
                <div className="w-px h-12 bg-steel/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-steel-light">Лет на рынке</div>
                </div>
              </div>
            </div>
            
            <Card className="bg-steel-dark/30 border-steel/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                  <Icon name="Award" size={24} className="mr-2" />
                  Лицензии и сертификаты
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {certificates.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-primary/30 text-white justify-center py-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-steel-light">
                    Все работы выполняются в соответствии с международными стандартами качества
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-charcoal/40 border-steel/20 hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-steel-light text-sm mb-3">{service.description}</p>
                  {service.details.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1 justify-center">
                      {service.details.map((detail, detailIndex) => (
                        <Badge key={detailIndex} variant="outline" className="border-primary/30 text-xs text-steel-light">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Реализованные проекты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-steel-dark/20 border-steel/30 overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="h-48 bg-gradient-to-br from-steel to-charcoal relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Building" size={48} className="text-primary/70" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90">Завершен</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-steel-light mb-1">{project.type}</p>
                  <p className="text-steel text-sm mb-3">Заказчик: {project.client}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">{project.area}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Адрес</h3>
              <p className="text-steel-light">г. Москва, ул. Промышленная, 25</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Телефон</h3>
              <p className="text-steel-light">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-steel-light">info@stalstroy.ru</p>
            </div>
          </div>
          
          <Card className="bg-charcoal/40 border-steel/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Готовы начать проект?</h3>
              <p className="text-steel-light mb-6">
                Свяжитесь с нами для получения консультации и расчета стоимости вашего проекта
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal-dark border-t border-steel/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <Icon name="Building2" size={32} className="text-primary mr-3" />
            <span className="text-2xl font-bold text-white">СУ-77</span>
          </div>
          <p className="text-steel-light mb-4">Профессиональное промышленное строительство</p>
          <p className="text-steel text-sm">© 2024 СУ-77. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;