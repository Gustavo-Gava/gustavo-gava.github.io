import { Box, Divider, Flex, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { Slide } from "react-awesome-reveal"
import ChevronLeft from "../../../assets/svg/chevron-left.svg"
import { ProjectCard } from "../../ProjectCard"
import { HighlightedText } from "../../Text/HighlightedText"
import { NormalText } from "../../Text/NormalText"
import { TechText } from "../../Text/TechText"
import { Title } from "../../Text/Title"
import { WorkExperience } from "../../WorkExperience"

const workExperiences = [
	{
		enterprise: "Codeby",
		role: "@Desenvolvedor Frontend",
		startDate: "Junho 2022",
		functionsList: [
			"Desenvolvimento de ECommerces com VTEX e Nextjs, sendo responsável pelo desenvolvimento a partir do design de um Figma, sendo totalmente fiel a ele.",
			"Suporte de projetos desenvolvidos, sendo responsável pela comunicação específicas de tasks com clientes brasileiros e europeus, onde o cliente descreve a task, faço a estimativa, e se estiver alinhado, prossigo com a task.",
			"Iniciativa para melhorar o fluxo de PRs e commits no GitHub.",
		],
	},
	{
		enterprise: "Arkos Digital",
		role: "@Desenvolvedor Fullstack",
		startDate: "Setembro 2021",
		endDate: "Junho 2022",
		functionsList: [
			"Desenvolvimento de aplicativos mobile com React Native, sendo responsável desde a configuração do ambiente de desenvolvimento, até a postagem do aplicativo para as stores",
			"Desenvolvimento de sites com React e Next.js, sendo responsável pela criação e deploy de websites.",
			"Desenvolvimento do backend com Node.js e Nest.js, sendo responsável pela criação e implementação de features.",
			"Comunicação e explicação de features do projeto diretamente com o cliente e internamente.",
		],
	},
]

export function ThirdSection() {
	return (
		<Box minH="calc(100vh)">
			<Flex maxW={1200} h="100%" py="10" px="4" flexDir="column" mx="auto">
				<Flex as={Slide} flexDir="column" mx="auto">
					<Text as="h2" fontSize="2xl" mx="auto" fontFamily="Roboto Mono">
						<HighlightedText display="inline" fontSize="xl" color="highlighted.400" id="experience">
							02.{" "}
						</HighlightedText>
						Experiência
					</Text>

					{workExperiences.map((item) => (
						<WorkExperience data={item} />
					))}
				</Flex>

				<Title mx="auto" fontSize="2xl" my="4" mt="32" id="projects">
					<HighlightedText fontSize="xl" fontFamily="Roboto Mono" display="inline">
						03.{" "}
					</HighlightedText>
					Projetos
				</Title>

				<Flex gap="4" flexDir="column">
					<ProjectCard
						backgroundImageUrl="https://admintresc.vteximg.com.br/arquivos/ids/542397/01025_MERCAFE_%20Banners%20Novo%20Menu_TRES_MOBILE.jpg?v=637889192453400000"
						title="Mercafé"
						type="Projeto Profissional"
						techs={["React", "Typescript", "StyledComponents", "Nextjs", "VTEX", "GraphQL"]}
						projectLink="https://mercafe.com.br/"
						imageLeftSide={false}
					>
						<NormalText>
							E-commerce de cafés e produtos envolvidos no mundo do café. Fui responsável desde o
							começo do desenvolvimento até o deploy, juntamente à equipe.
						</NormalText>
					</ProjectCard>

					<ProjectCard
						backgroundImageUrl="https://user-images.githubusercontent.com/77810817/169858134-d7e74739-a32f-4e19-a001-45ccdb0d0434.png"
						title="Amigo Blue"
						type="Projeto Profissional"
						techs={["React", "React Native", "Typescript", "StyledComponents", "Nextjs", "Nodejs"]}
						projectLink="https://play.google.com/store/search?q=Amigo%20Blue&c=apps"
						imageLeftSide
					>
						<NormalText>
							Um aplicativo para facilitar a criação de amizade na infância. Fui responsável por
							toda a configuração do ambiente e desenvolvimento mobile e frontend.
						</NormalText>
					</ProjectCard>

					<ProjectCard
						backgroundImageUrl="https://user-images.githubusercontent.com/77810817/158680346-68cc69d4-bcc7-427a-b65a-f7baa6a0bbe4.png"
						title="Dashgo"
						type="Projeto Pessoal"
						techs={["React", "Typescript", "Nextjs", "Chakra UI", "React Query"]}
						projectLink="https://github.com/Gustavo-Gava/dashgo"
					>
						<NormalText>
							Dashgo é página de administração para sua aplicação, te possibilitando visualizar
							usuários, editar e remover. Uma aplicação com design clean e totalmente responsiva,
							cujo uso pode abranger diversas aplicações, tendo em vista que grande parte das vezes
							é necessário uma página de administração, então que seja uma ótima página.
						</NormalText>
					</ProjectCard>

					<ProjectCard
						backgroundImageUrl="https://user-images.githubusercontent.com/77810817/165830868-33f24fd7-ce84-41a9-bd27-872cec13a397.png"
						title="ig.news"
						type="Projeto Pessoal"
						techs={["React", "Typescript", "Nextjs", "Stripe", "FaunaDB"]}
						projectLink="https://github.com/Gustavo-Gava/ig.news"
						imageLeftSide
					>
						<NormalText>
							O ig.news é uma newsletter que você pode assinar para ficar sincronizado com as
							notícias sobre React e o mundo da programação. Possui sistema de pagamento mensal para
							acessar notícias exclusivas, Login Social e CMS para registrar os posts.
						</NormalText>
					</ProjectCard>

					<ProjectCard
						backgroundImageUrl="https://programadoresbrasil.com.br/wp-content/uploads/2020/04/GitHub-logo-2-imagen.jpg"
						title="Github"
						type="Projeto Pessoal"
						projectLink="https://github.com/Gustavo-Gava"
						techs={[
							"React",
							"React Native",
							"Typescript",
							"Styled Components",
							"Chakra UI",
							"Nodejs",
							"...",
						]}
					>
						Estou em constante evolução, sempre estudando sobre as tecnologias que trabalho e
						atualizando frequentemente meu Github, com projetos pessoais documentados e colocando em
						prática a teoria.
					</ProjectCard>
				</Flex>
			</Flex>
		</Box>
	)
}
