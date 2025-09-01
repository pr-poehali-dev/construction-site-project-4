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

      {/* Projects Gallery Section */}
      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Галерея выполненных работ</h2>
          <p className="text-center text-steel-light mb-12">Монолитные работы - наши завершённые проекты</p>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border border-steel/20 rounded-lg bg-charcoal/20 p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-steel-light">Объём: <span className="text-primary font-semibold">{project.area}</span></span>
                    <span className="text-steel-light">Заказчик: <span className="text-white">{project.client}</span></span>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Завершён</Badge>
                  </div>
                </div>
                
                {/* Project photos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {index === 0 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/4b96e253-2efc-4f3f-b526-a3cbf8cf0372.jpg" 
                          alt="ЖК Алхимово - монолитные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/59285193-efff-49b6-9aa1-17ec154d0d90.jpg" 
                          alt="ЖК Алхимово - общий вид комплекса" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/a589f928-d2e7-4cc2-a814-a2ab69455dce.jpg" 
                          alt="ЖК Алхимово - строительство высотной части" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/e74049c2-2554-454c-b82f-ef9f6c2aab40.jpg" 
                          alt="ЖК Алхимово - монолитный каркас зимой" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/fe46fafb-0492-45cb-9fe9-1c23766551e5.jpg" 
                          alt="ЖК Алхимово - многоэтажное строительство" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/e835778b-7108-4966-84f7-d7adbb43957f.jpg" 
                          alt="ЖК Алхимово - фасадные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/e223f9fc-3d08-404e-b77a-8ac450362a37.jpg" 
                          alt="ЖК Алхимово - завершающий этап строительства" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/f2ec8fa4-9e40-445a-926a-8aea791d53b6.jpg" 
                          alt="ЖК Алхимово - готовый комплекс" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 10 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/1d95044b-479f-4a07-866c-3fee1a5c78c9.jpg" 
                          alt="Банный комплекс Парк Малевича - армирование плиты" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/356d1752-0c01-47c1-ad68-3199f07b65e0.jpg" 
                          alt="Банный комплекс Парк Малевича - фундаментная плита" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/83deb01e-b0c3-4ae3-9911-e02d6bba7cb0.jpg" 
                          alt="Банный комплекс Парк Малевича - зимние работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/f2e5d9ab-f28b-48db-91f5-bbcbda955d97.jpg" 
                          alt="Банный комплекс Парк Малевича - монтаж опалубки" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/026fa085-775e-416e-b748-79c1d3a128c5.jpg" 
                          alt="Банный комплекс Парк Малевича - армирование перекрытий" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/17093af0-953e-4124-8c98-0c1aa483b8f2.jpg" 
                          alt="Банный комплекс Парк Малевича - заливка бетоном" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/c61255e7-6c4c-4f69-912c-31ee5e5c44ca.jpg" 
                          alt="Банный комплекс Парк Малевича - финальная заливка" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/5dffe315-031b-4bde-ab3a-04d22c71e045.jpg" 
                          alt="Банный комплекс Парк Малевича - готовые конструкции" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/171b0ef3-e569-41ca-80d4-b45473861b0a.jpg" 
                          alt="Банный комплекс Парк Малевича - возведение стен" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/c4e4d240-375c-4990-affe-e21bde369c66.jpg" 
                          alt="Банный комплекс Парк Малевича - фундаментная плита готова" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/d0f00c39-b5b8-49f8-8f7a-2be5782faed7.jpeg" 
                          alt="Банный комплекс Парк Малевича - монолитные работы в процессе" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/9d608299-d5d7-46d5-80d8-9c4babc333d5.jpeg" 
                          alt="Банный комплекс Парк Малевича - вид с высоты" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/e4851a9a-6b9f-4ff2-b344-c13e6db5c472.jpeg" 
                          alt="Банный комплекс Парк Малевича - детальные работы по опалубке" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/cc4baea2-36ab-40a5-8b62-e22dcbec633d.jpeg" 
                          alt="Банный комплекс Парк Малевича - общий вид строительства" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/ce18633e-1ebf-4d16-9e12-481ec03119ed.jpg" 
                          alt="ЖК Квартал Марьино - монолитный каркас" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/2a6f6dab-e4f3-474e-a25c-ed84bf4fb51b.jpg" 
                          alt="ЖК Квартал Марьино - высотная часть" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/9158d76d-8c50-4348-ba1c-e4853ee930e0.jpg" 
                          alt="ЖК Квартал Марьино - строительство зимой" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/37eaf8ae-baa1-469b-883d-627d13e2b111.jpg" 
                          alt="ЖК Квартал Марьино - армирование фундамента" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/467201b2-9293-47d4-84d4-0e1619481186.jpg" 
                          alt="ЖК Квартал Марьино - возведение этажей" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/5866b2a6-a50c-43bf-a4c5-3d847a36ee91.jpg" 
                          alt="ЖК Молжаниново - монолитный каркас" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/e4fc9f0d-1027-4a1e-aa5c-015a5c9797f7.jpg" 
                          alt="ЖК Молжаниново - армирование фундамента" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/2c27f452-d063-49c7-8e61-9a821f2b63aa.jpg" 
                          alt="ЖК Молжаниново - возведение корпуса" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                    </>
                  )}
                  {index === 10 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                    </>
                  )}
                  {index === 11 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/366b7255-7b8e-4cba-a335-cf073fd17a30.jpg" 
                          alt="ЖК Первый Квартал, Видное - строительство высотки" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/05c790f4-98b3-4620-9ce7-6da8b1ad8071.jpg" 
                          alt="ЖК Первый Квартал, Видное - подземная часть" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/2e4e3262-6cbc-4fc7-be1c-3e5aab4e43a7.jpg" 
                          alt="ЖК Первый Квартал, Видное - комплекс зданий" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/2aba6471-c700-44b4-b9cc-a649179926e3.jpg" 
                          alt="ЖК Первый Квартал, Видное - завершающий этап" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/721993f3-6309-4ca4-ac0f-27b329bd7350.jpg" 
                          alt="ЖК Первый Квартал, Видное - панорамный вид строительства" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/612ee281-4b53-45b1-8ab6-013226aaab33.jpg" 
                          alt="ЖК Первый Квартал, Видное - общий вид с высоты" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/126904f7-a6c0-4b96-a0a2-f9925547d2e8.jpg" 
                          alt="ЖК Первый Квартал, Видное - строительные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/adf62919-4172-4ef8-bf86-709c583d9f6c.jpg" 
                          alt="ЖК Первый Квартал, Видное - вечерний вид стройки" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/1dc79884-3dc4-41d4-b2b9-8a1b6d2374d9.jpg" 
                          alt="ЖК Первый Квартал, Видное - общий план комплекса" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/122b0004-d8f1-436e-a9d0-49f7ab811ee4.jpg" 
                          alt="ЖК Остафьево - монолитные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/5549d230-6f3b-454c-8be9-4c92df0643a1.jpg" 
                          alt="ЖК Остафьево - каркас здания" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/61993186-2f79-4f6b-8ae1-dffc10c4bc56.jpg" 
                          alt="ЖК Остафьево - возведение этажей" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/ee4f5fb2-3b94-476e-8af4-28f3561b7d56.jpg" 
                          alt="ЖК Остафьево - строительство комплекса" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/c31119f1-7532-448c-839b-fa86b0556673.jpg" 
                          alt="ЖК Остафьево - высотный дом" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/3614729b-41cf-41f0-9fdf-b15878143a88.jpg" 
                          alt="ЖК Остафьево - армирование конструкций" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/b21008c4-8ad3-4080-a63b-bdc7d94f5d0f.jpg" 
                          alt="ЖК Остафьево - монолитное строительство" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/24e72233-2f84-4724-8fc3-78380d52e6fb.jpg" 
                          alt="ЖК Остафьево - активная стройка" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/fb27d340-109d-4c11-8a42-6878d99ca330.jpeg" 
                          alt="ЖК Квартал Строгино - высотное строительство" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/26689fd5-0802-4c5b-a362-3a35f4ed5f8d.jpeg" 
                          alt="ЖК Квартал Строгино - монолитные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/1261b60c-d96b-40ab-994a-91ce83fb2828.jpeg" 
                          alt="ЖК Квартал Строгино - строительство комплекса" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/cb8a4a1d-1bf7-4d65-8ac5-166e8a5773a6.jpeg" 
                          alt="ЖК Квартал Строгино - возведение каркаса" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/8d95111b-9c5e-45cb-96b3-f18cef9c53e1.jpeg" 
                          alt="ЖК Квартал Строгино - многоэтажное здание" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/65adda31-c8c7-4009-947c-c104f7532429.jpeg" 
                          alt="ЖК Квартал Строгино - жилой корпус" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/91d19e9f-a819-498b-98b2-a34a8802fad9.jpeg" 
                          alt="ЖК Квартал Строгино - подземная парковка" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/43137d06-b5c0-40ca-93a6-7857cd105191.jpeg" 
                          alt="ЖК Квартал Строгино - монолитные конструкции" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/99faed79-5e6b-4ef7-bd1a-af8d29478b47.jpeg" 
                          alt="ЖК Квартал Строгино - армирование фундамента" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/efe20fc7-b3bd-4229-be2b-89d4f37d3d1b.jpeg" 
                          alt="ЖК Квартал Строгино - строительная площадка" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/3bf76632-7f22-41b7-9a9a-8b8e12750f63.jpeg" 
                          alt="ЖК Квартал Строгино - опалубочные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/16589eed-e722-43c6-9004-1daaf0c8e65d.jpg" 
                          alt="ЖК Пятницкие Луга, Паркинг - строительство паркинга" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                    </>
                  )}
                  {index === 6 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/0aaa65e5-a515-488f-97b1-27381dc8e7b5.jpg" 
                          alt="ЖК Пятницкие Луга, Детский сад - строительство детского сада" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/caca704e-751e-4db6-a742-6cf1af91a719.jpg" 
                          alt="ЖК Пятницкие Луга, Детский сад - монолитные работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/eedad0c2-e022-466a-adfe-3f67fce34cf3.jpg" 
                          alt="ЖК Пятницкие Луга, Детский сад - внутренние работы" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index === 7 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/5d47932f-2de8-4cf4-9b5c-6d65769fdee2.jpg" 
                          alt="ЖК Пятницкие Луга, ЛОС - ночная заливка бетона" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/9f66c819-4d57-453e-8036-4ef19be26cc8.jpg" 
                          alt="ЖК Пятницкие Луга, ЛОС - монолитные работы с арматурой" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/213695b1-2848-4177-8b0a-4d3aee961640.jpg" 
                          alt="ЖК Пятницкие Луга, ЛОС - земляные работы и котлован" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/fa3a52df-b5ee-4cce-85db-844b9ec41473.jpg" 
                          alt="ЖК Пятницкие Луга, ЛОС - готовые железобетонные конструкции" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/2fb3f716-cafc-406e-b978-bca971c7d226.jpg" 
                          alt="ЖК Пятницкие Луга, ЛОС - зимнее строительство" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30">
                        <img 
                          src="https://cdn.poehali.dev/files/fb6af4ac-1691-4bc7-9b2b-4609d587b109.jpg" 
                          alt="ЖК Пятницкие Луга, ЛОС - монолитные стены с опалубкой" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                  {index !== 0 && index !== 1 && index !== 2 && index !== 3 && index !== 4 && index !== 5 && index !== 6 && index !== 7 && index !== 10 && index !== 11 && (
                    <>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                      <div className="aspect-video bg-steel/20 rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Image" size={32} className="text-steel/60 mb-2 mx-auto" />
                          <p className="text-steel/60 text-sm">Фото будет загружено</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
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