import { Box, Divider, Flex, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import ChevronLeft from "../../../assets/svg/chevron-left.svg"
import { HighlightedText } from "../../Text/HighlightedText"
import { NormalText } from "../../Text/NormalText"
import { Title } from "../../Text/Title"

export function ThirdSection() {
	return (
		<Box minH="calc(100vh)">
			<Flex maxW={1440} h="100%" py="10" px="4" flexDir="column">
				<Text as="h2" fontSize="4xl" mx="auto">
					Experience
				</Text>

				<Flex flexDir="column" p="4" mx="auto">
					<Text fontSize="2xl">
						Arkos Digital <HighlightedText as="span">@Desenvolvedor Fullstack</HighlightedText>
					</Text>
					<Text fontSize="smaller" color="gray.200">
						September 2021 - May 2022
					</Text>

					<UnorderedList
						maxW={600}
						color="gray.200"
						letterSpacing="wider"
						textAlign="justify"
						display="flex"
						flexDir="column"
						gap="4"
						style={{ listStyleImage: `url(${ChevronLeft})` }}
					>
						<ListItem mt="4">
							Desenvolvimento de aplicativos mobile com React Native, sendo responsável desde a
							configuração do ambiente de desenvolvimento, até a postagem do aplicativo para as
							stores
						</ListItem>
						<ListItem>
							Desenvolvimento de sites com React e Next.js, sendo responsável pela criação e deploy
							de websites.
						</ListItem>
						<ListItem>
							Desenvolvimento do backend com Node.js e Nest.js, sendo responsável pela criação e
							implementação de features.
						</ListItem>
						<ListItem>
							Comunicação e explicação de features do projeto diretamente com o cliente e
							internamente.
						</ListItem>
					</UnorderedList>
				</Flex>

				<Title mx="auto" my="4">
					Projetos
				</Title>

				<Flex gap="4" flexDir="column">
					<Box p="4" bg="gray.750" borderRadius="base">
						<HighlightedText>Projeto Profissional</HighlightedText>
						<Link
							mb="2"
							fontSize="2xl"
							textDecoration="underline"
							href="https://play.google.com/store/search?q=amigo%20blue&c=apps"
						>
							Amigo Blue
						</Link>

						<NormalText>
							Um aplicativo para facilitar a criação de amizade na infância. Fui responsável por
							toda a configuração do ambiente e desenvolvimento mobile e frontend.
						</NormalText>

						<Flex as="footer" gap="2" mt="4" wrap="wrap">
							<NormalText>React</NormalText>
							<NormalText>Typescript</NormalText>
							<NormalText>Nextjs</NormalText>
							<NormalText>React Native</NormalText>
							<NormalText>Styled Components</NormalText>
						</Flex>
					</Box>
					<Box p="4" bg="gray.750" borderRadius="base" maxW={500}>
						<HighlightedText>Projeto Pessoal</HighlightedText>
						<Title mb="2">Dashgo</Title>

						<NormalText>
							Dashgo é página de administração para sua aplicação, te possibilitando visualizar
							usuários, editar e remover. Uma aplicação com design clean e totalmente responsiva,
							cujo uso pode abranger diversas aplicações, tendo em vista que grande parte das vezes
							é necessário uma página de administração, então que seja uma ótima página.
						</NormalText>

						<Flex as="footer" gap="2" mt="4">
							<NormalText>React</NormalText>
							<NormalText>Typescript</NormalText>
							<NormalText>Nextjs</NormalText>
							<NormalText>Chakra UI</NormalText>
							<NormalText>React Query</NormalText>
						</Flex>
					</Box>

					<Box
						p="4"
						bg="gray.750"
						borderRadius="base"
						maxW={500}
						bgPosition="center"
						bgSize="cover"
						style={{
							backgroundImage:
								"linear-gradient(rgba(30,30,30,0.9), rgba(30,30,30,0.8)), url(https://user-images.githubusercontent.com/77810817/165830868-33f24fd7-ce84-41a9-bd27-872cec13a397.png)",
						}}
					>
						<HighlightedText>Projeto Pessoal</HighlightedText>
						<Title mb="2">ig.news</Title>

						<NormalText>
							O ig.news é uma newsletter que você pode assinar para ficar sincronizado com as
							notícias sobre React e o mundo da programação. Possui sistema de pagamento mensal para
							acessar notícias exclusivas, Login Social e CMS para registrar os posts.
						</NormalText>

						<Flex as="footer" gap="2" mt="4">
							<NormalText>React</NormalText>
							<NormalText>Typescript</NormalText>
							<NormalText>Nextjs</NormalText>
							<NormalText>Stripe</NormalText>
							<NormalText>FaunaDB</NormalText>
						</Flex>
					</Box>

					<Box p="4" bg="gray.750" borderRadius="base">
						<HighlightedText>Projeto Pessoal</HighlightedText>
						<Title mb="2">Github</Title>

						<NormalText>
							Estou em constante evolução, sempre estudando sobre as tecnologias que trabalho e
							atualizando frequentemente meu Github, com projetos pessoais documentados e colocando
							em prática a teoria.
						</NormalText>

						<Flex as="footer" gap="2" mt="4">
							<NormalText>React</NormalText>
							<NormalText>React Native</NormalText>
							<NormalText>Typescript</NormalText>
							<NormalText>Nextjs</NormalText>
							<NormalText>...</NormalText>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</Box>
	)
}
