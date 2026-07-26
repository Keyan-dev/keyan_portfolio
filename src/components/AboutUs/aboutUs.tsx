import './aboutUs.css';
import { motion } from 'framer-motion';
const AboutUs = () => {
    const highlights = [
        { label: 'Backend ownership', value: 'Node.js, Express.js, Prisma, REST and GraphQL APIs' },
        { label: 'Frontend delivery', value: 'Angular, Ionic, React.js, responsive product UI' },
        { label: 'Performance focus', value: 'Redis caching, query optimization, production support' },
    ];
    return (
        <section className="about-us-container" id="About">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [32, 0] }} transition={{ duration: 0.5 }} className='about-content'>
                <div className='section-kicker'>About</div>
                <h2 className='display-text-1'><strong>Building reliable products from API design to user experience.</strong></h2>
                <p className='about-me-content'>
                    I am Karthikeyan T, a full stack developer with 4+ years of experience designing backend systems and cross-platform frontends using Node.js, Express.js, Angular, Ionic, React.js, and AWS. I have shipped production features for consumer platforms, including search relevance, role-based access control, audit logging, payment workflows, caching layers, and scalable API services.
                </p>
                <div className='about-highlight-grid'>
                    {highlights.map((item) => (
                        <div className='about-highlight-card' key={item.label}>
                            <h3>{item.label}</h3>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default AboutUs;
