import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, DollarSign, Edit, Globe, Mail, MapPin, Phone, Save, Star } from "lucide-react"

import { useState } from "react"

export function GigWorkerProfile() {
    const [isEditing, setIsEditing] = useState(false)
    const [workerData, setWorkerData] = useState({
      name: "Jane Smith",
      title: "Full Stack Developer",
      location: "New York, NY",
      email: "jane.smith@email.com",
      phone: "+1 (555) 987-6543",
      website: "www.janesmith.dev",
      bio: "Passionate full stack developer with 5+ years of experience. Specialized in React, Node.js, and cloud technologies. Always eager to take on new challenges and deliver high-quality solutions.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "GraphQL", "MongoDB"],
      hourlyRate: "$75",
    })
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setWorkerData(prevData => ({ ...prevData, [name]: value }))
    }
  
    const handleSave = () => {
      // Here you would typically send the updated data to your backend
      console.log('Updated worker data:', workerData)
      setIsEditing(false)
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-6">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg?text=JS" alt={workerData.name} />
                <AvatarFallback>{workerData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-grow text-center sm:text-left">
                <CardTitle className="text-2xl mb-2">{workerData.name}</CardTitle>
                <p className="text-gray-500">{workerData.title}</p>
                <div className="flex items-center justify-center sm:justify-start mt-2">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">{workerData.location}</span>
                </div>
              </div>
              <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
                {isEditing ? 'Save' : 'Edit'}
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="about" className="mt-6">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                  <div className="space-y-4">
                    {isEditing ? (
                      <>
                        <div>
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            name="bio"
                            value={workerData.bio}
                            onChange={handleInputChange}
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            value={workerData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={workerData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            name="website"
                            value={workerData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="hourlyRate">Hourly Rate</Label>
                          <Input
                            id="hourlyRate"
                            name="hourlyRate"
                            value={workerData.hourlyRate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p>{workerData.bio}</p>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{workerData.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{workerData.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-gray-400 mr-2" />
                          <a href={`https://${workerData.website}`} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                            {workerData.website}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{workerData.hourlyRate}/hour</span>
                        </div>
                      </>
                    )}
                    <div>
                      <h3 className="font-semibold mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {workerData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="portfolio">
                  <div className="space-y-4">
                    {['E-commerce Website', 'Social Media Dashboard', 'Task Management App'].map((project, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold">{project}</h3>
                          <p className="text-sm text-gray-500">Completed: {new Date().toLocaleDateString()}</p>
                          <div className="flex items-center mt-2">
                            <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm">{['React, Node.js, MongoDB', 'Vue.js, Express, PostgreSQL', 'React Native, Firebase'][index]}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="reviews">
                  <div className="space-y-4">
                    {['TechCorp', 'StartupX', 'DesignPro'].map((client, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center mb-2">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarFallback>{client[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{client}</p>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < 5 - index * 0.5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            {index === 0 ? "Jane is an exceptional developer. Her work on our e-commerce platform exceeded our expectations." :
                             index === 1 ? "Great communication and problem-solving skills. Delivered the project ahead of schedule." :
                             "Highly skilled and professional. Would definitely hire again for future projects."}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }