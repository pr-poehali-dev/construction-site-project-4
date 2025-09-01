import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const constructionStages = [
    {
      title: "Фундаментные работы",
      description: "Разработка котлована и заливка фундаментной плиты",
      status: "completed",
      images: [
        "https://cdn.poehali.dev/files/4fa810d1-025e-4ea1-93e8-fb43c06648d3.jpeg",
        "https://cdn.poehali.dev/files/81888982-8d3a-4592-8c12-c3bea0109cc4.jpeg"
      ]
    },
    {
      title: "Монолитные работы",
      description: "Возведение монолитного каркаса зданий",
      status: "in_progress",
      images: [
        "https://cdn.poehali.dev/files/c265fede-7d4e-49d6-982f-c6c7fcdccdfb.jpeg",
        "https://cdn.poehali.dev/files/9001cc5b-552b-4b25-b6fc-96d1da3ca65c.jpeg",
        "https://cdn.poehali.dev/files/2a164ef2-288e-4429-b266-6e400b3a57a0.jpeg",
        "https://cdn.poehali.dev/files/66c46858-314a-4c03-858a-138cb7ce51a5.jpeg"
      ]
    },
    {
      title: "Строительство корпусов",
      description: "Возведение жилых корпусов различной этажности",
      status: "in_progress",
      images: [
        "https://cdn.poehali.dev/files/235102ae-7c92-42eb-9343-6c5b1341db58.jpeg",
        "https://cdn.poehali.dev/files/b107ebdb-3d99-40ae-abb4-9fbbc6219633.jpeg",
        "https://cdn.poehali.dev/files/d7cdbbbc-70a0-4c38-9678-f0424451490b.jpeg",
        "https://cdn.poehali.dev/files/dccd339b-cdc0-4d13-8c8a-184294ef1db6.jpeg"
      ]
    },
    {
      title: "Отделочные работы",
      description: "Фасадные работы и благоустройство территории",
      status: "planned",
      images: [
        "https://cdn.poehali.dev/files/8c7c14c6-bd9d-4fbf-8232-9012424155ec.jpeg"
      ]
    }
  ];

  const projectInfo = {
    name: "ЖК Квартал Строгино",
    developer: "ГК Самолет",
    location: "г. Москва, район Строгино",
    area: "17,000 м³",
    completion: "2025 год",
    apartments: "1,200+ квартир",
    buildings: "8 корпусов"
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${constructionStages[1].images[0]}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/85" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <Icon name="Building2" size={80} className="text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-steel-light bg-clip-text text-transparent">
            ЖК Квартал Строгино
          </h1>
          <p className="text-xl md:text-2xl text-steel-light mb-8 max-w-3xl mx-auto">
            Современный жилой комплекс в престижном районе Строгино. 
            Монолитное строительство высочайшего качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Узнать о квартирах
            </Button>
            <Button variant="outline" size="lg" className="border-steel text-white hover:bg-steel/20">
              <Icon name="Camera" size={20} className="mr-2" />
              Посмотреть ход строительства
            </Button>
          </div>
          
          {/* Project stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-charcoal/60 backdrop-blur-sm rounded-lg p-4 border border-steel/20">
              <div className="text-2xl font-bold text-primary mb-1">{projectInfo.buildings}</div>
              <div className="text-steel-light text-sm">Корпусов</div>
            </div>
            <div className="bg-charcoal/60 backdrop-blur-sm rounded-lg p-4 border border-steel/20">
              <div className="text-2xl font-bold text-primary mb-1">{projectInfo.apartments}</div>
              <div className="text-steel-light text-sm">Квартир</div>
            </div>
            <div className="bg-charcoal/60 backdrop-blur-sm rounded-lg p-4 border border-steel/20">
              <div className="text-2xl font-bold text-primary mb-1">{projectInfo.area}</div>
              <div className="text-steel-light text-sm">Объём работ</div>
            </div>
            <div className="bg-charcoal/60 backdrop-blur-sm rounded-lg p-4 border border-steel/20">
              <div className="text-2xl font-bold text-primary mb-1">{projectInfo.completion}</div>
              <div className="text-steel-light text-sm">Сдача</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-pulse" />
        <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-steel/40 rotate-12" />
      </section>

      {/* Project Info Section */}
      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О проекте</h2>
              <p className="text-steel-light mb-6 text-lg leading-relaxed">
                ЖК "Квартал Строгино" - это современный жилой комплекс, возводимый 
                по монолитной технологии. Проект реализуется ГК "Самолет" и станет 
                новой жемчужиной престижного района Строгино.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-steel-light">{projectInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Building" size={20} className="text-primary" />
                  <span className="text-steel-light">Застройщик: {projectInfo.developer}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <span className="text-steel-light">Планируемая сдача: {projectInfo.completion}</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-steel-dark/30 border-steel/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                  <Icon name="Award" size={24} className="mr-2" />
                  Преимущества проекта
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    <span className="text-steel-light">Монолитная технология строительства</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    <span className="text-steel-light">Престижный район Строгино</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    <span className="text-steel-light">Развитая инфраструктура</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    <span className="text-steel-light">Близость к природным зонам</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    <span className="text-steel-light">Современные планировки</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Progress Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Ход строительства</h2>
          <p className="text-center text-steel-light mb-12">Актуальные фотографии с площадки</p>
          
          <div className="space-y-16">
            {constructionStages.map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-4 h-4 rounded-full ${
                    stage.status === 'completed' ? 'bg-green-500' :
                    stage.status === 'in_progress' ? 'bg-primary' :
                    'bg-steel/40'
                  }`} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{stage.title}</h3>
                    <p className="text-steel-light mb-2">{stage.description}</p>
                    <Badge variant="outline" className={`
                      ${stage.status === 'completed' ? 'border-green-500/30 text-green-400' :
                        stage.status === 'in_progress' ? 'border-primary/30 text-primary' :
                        'border-steel/30 text-steel-light'}
                    `}>
                      {stage.status === 'completed' ? 'Завершено' :
                       stage.status === 'in_progress' ? 'В процессе' :
                       'Планируется'}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stage.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-video bg-steel/20 rounded-lg overflow-hidden border border-steel/30 group">
                      <img 
                        src={image}
                        alt={`${stage.title} - фото ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Timeline line */}
                {index < constructionStages.length - 1 && (
                  <div className="absolute left-2 top-16 w-px h-16 bg-steel/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">Контакты застройщика</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="Building" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Застройщик</h3>
              <p className="text-steel-light">ГК "Самолет"</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Отдел продаж</h3>
              <p className="text-steel-light">+7 (495) 777-77-77</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Офис продаж</h3>
              <p className="text-steel-light">ул. Строгинский бульвар</p>
            </div>
          </div>
          
          <Card className="bg-charcoal/40 border-steel/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Интересует квартира в ЖК?</h3>
              <p className="text-steel-light mb-6">
                Получите консультацию специалиста и узнайте о доступных вариантах
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Записаться на показ
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
            <span className="text-2xl font-bold text-white">ЖК Квартал Строгино</span>
          </div>
          <p className="text-steel-light mb-4">Современное жилье в престижном районе</p>
          <p className="text-steel text-sm">© 2024 ГК "Самолет". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;