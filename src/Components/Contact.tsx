import { useState } from "react";
import type React from "react";
import profile from "../Assets/profilephoto.jpeg";
import styles from "../Styles/Contact.module.css";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .sendForm(
      "service_0dff8x8",
      "template_i7faayt",
      e.target as HTMLFormElement,
      "FuVBfmIgX8fSxvLa4"
    )
    .then(
      (result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        alert("Failed to send message!");
        setIsSubmitting(false);
      }
    );
};

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>05</span>
          <h2 className={styles.title}>Let's Create Something Amazing</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Ready to bring your ideas to life? Let's discuss your next project
            and make it extraordinary.
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Information Card */}
          <div className={styles.contactInfo}>
            <div className={styles.infoHeader}>
              <div className={styles.avatarContainer}>
                <img src={profile} alt="Nagashree" className={styles.avatar} />
                <div className={styles.statusIndicator}>
                  <div className={styles.statusDot}></div>
                  <span>Available</span>
                </div>
              </div>

              <div className={styles.infoTitle}>
                <h3>Let's Connect</h3>
                <p>
                  I'm always excited to work on new projects and collaborate
                  with amazing people.
                </p>
              </div>
            </div>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <Mail />
                </div>
                <div className={styles.methodContent}>
                  <h4>Email</h4>
                  <a
                    href="mailto:nagashrees545@gmail.com"
                    className={styles.methodLink}
                  >
                    nagashrees545@gmail.com
                  </a>
                  <span className={styles.methodNote}>
                    Best for detailed discussions
                  </span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <Phone />
                </div>
                <div className={styles.methodContent}>
                  <h4>Phone</h4>
                  <a href="tel:7022291164" className={styles.methodLink}>
                    +91 7022291164
                  </a>
                  <span className={styles.methodNote}>
                    Available 9 AM - 6 PM IST
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.socialConnect}>
              <h4>Connect on Social</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/nagashree-s-0282231a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className={styles.socialLink}
                >
                  <span>LinkedIn</span>
                </a>
              
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <MessageCircle className={styles.formIcon} />
              <h3>Send me a message</h3>
              <p>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    <span>Full Name</span>
                    <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <span>Email Address</span>
                    <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  <span>Subject</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  <span>Message</span>
                  <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={styles.textarea}
                  placeholder="Tell me about your project, ideas, or just say hello!"
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                    <Sparkles size={16} className={styles.sparkle} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Stats */}
        {/* <div className={styles.quickStats}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <MessageCircle />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>Response Time</span>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <Globe />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Remote Ready</span>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <Sparkles />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>2.6+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
