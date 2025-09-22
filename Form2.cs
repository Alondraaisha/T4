using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace form2
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
            tbpass.UseSystemPasswordChar = true;
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btlogin_Click(object sender, EventArgs e)
        {
            if (tbuser.Text == "admin" && tbpass.Text == "1234")
            {
                MessageBox.Show("Login Sucessfull");
                this.DialogResult= DialogResult.OK;
                this.Close();
            }
            else
            {
                MessageBox.Show("Invalid user");
            }
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
          if(cb1.Checked)
            {
                tbpass.UseSystemPasswordChar = false;
            }
            else
            {
                tbpass.UseSystemPasswordChar = true;
            }
        }
    }
}
